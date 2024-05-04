<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { type UnsplashData } from '$lib/types/unsplash';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { imageDataStore } from '$lib/stores/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import SvgSpinners3DotsMove from '$lib/components/svg/SvgSpinners3DotsMove.svelte';
	import { infiniteScrollAction } from 'svelte-legos';
	import { blurhashToCssGradientString } from '@unpic/placeholder';

	export let data: UnsplashData;

	let isLoading = false;
	let results = data.data.response.results;
	let capitalized = data.params.charAt(0).toUpperCase();
	let imageLoaded: { [key: string]: boolean } = {};
	let pageNumber: number = 1;
	let images: any = [];
	let combined = [...results, ...(images || [])];

	function handleImageLoad(imageId: string) {
		imageLoaded[imageId] = true;
	}

	function handleClick(imageId: string) {
		const allImages = [...results, ...images];
		const selectedImage = allImages.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}

	function blurhashPlaceholder(blurhash: string) {
		const placeholder = blurhashToCssGradientString(blurhash);
		return placeholder;
	}

	async function loadItems() {
		if (isLoading) return;
		isLoading = true;

		try {
			const response = await fetch('/api/get-images', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					query: data.params,
					page: pageNumber + 1
				})
			});

			if (response.ok) {
				pageNumber += 1;
			}

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const jsonData = await response.json();
			images = [...images, ...jsonData];
			console.log(images);

			isLoading = false;
		} catch (error) {
			console.error('Error:', error);
			isLoading = false;
		}
	}

	$: {
		results = data.data.response.results;
		capitalized = data.params.charAt(0).toUpperCase();
		combined = [...results, ...images];
	}
</script>

<h1 class="border-b px-2 py-2 text-2xl">
	Found {data.data.response.total} results for: {capitalized + data.params.slice(1)}
</h1>

<section
	class="flex flex-col gap-4 py-4"
	use:infiniteScrollAction={{
		delay: 500,
		distance: 100,
		cb: loadItems
	}}
>
	{#each combined as imageObject (imageObject.id)}
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2 px-2">
				<Avatar.Root>
					<Avatar.Image src={imageObject.user.profile_image.small}></Avatar.Image>
					<Avatar.Fallback>FP</Avatar.Fallback>
				</Avatar.Root>
				<b>{imageObject.user.name}</b>
			</div>
			<a
				data-sveltekit-preload-code="viewport"
				href={'/image/' + imageObject.id}
				on:click={() => handleClick(imageObject.id)}
			>
				<div
					class:image-visible={imageLoaded[imageObject.id]}
					class:image-hidden={!imageLoaded[imageObject.id]}
				>
					<Image
						layout="fullWidth"
						src={imageObject.urls.small}
						alt={data.params}
						on:load={() => handleImageLoad(imageObject.id)}
						background={blurhashPlaceholder(imageObject.blur_hash)}
					/>
				</div>

				{#if !imageLoaded[imageObject.id]}
					<Skeleton
						class="h-[400px] w-full object-cover"
						style={'background: ' + blurhashPlaceholder(imageObject.blur_hash)}
					/>
				{/if}
			</a>
		</div>
	{/each}
	{#if isLoading}
		<div class="flex justify-center py-4">
			<SvgSpinners3DotsMove class="size-10"></SvgSpinners3DotsMove>
		</div>
	{/if}
</section>

<style>
	.image-visible {
		visibility: visible;
		position: static;
	}
	.image-hidden {
		visibility: hidden;
		position: absolute;
	}
</style>
