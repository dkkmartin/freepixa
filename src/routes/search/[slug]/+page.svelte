<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { type UnsplashData } from '$lib/types/unsplash';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { imageDataStore } from '$lib/stores/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import SvgSpinners3DotsMove from '$lib/components/svg/SvgSpinners3DotsMove.svelte';
	import { infiniteScrollAction } from 'svelte-legos';
	import { goto } from '$app/navigation';
	import { blurhashToCssGradientString } from '@unpic/placeholder';

	export let data: UnsplashData;

	let isLoading = false;
	let results = data.data.response.results;
	let capitalized = data.params.charAt(0).toUpperCase();
	let imageLoaded: { [key: string]: boolean } = {};
	let pageNumber: number = 1;

	function handleImageLoad(imageId: string) {
		imageLoaded[imageId] = true;
	}

	function handleClick(imageId: string) {
		const selectedImage = results.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}

	function blurhashPlaceholder(blurhash: string) {
		const placeholder = blurhashToCssGradientString(blurhash);
		return placeholder;
	}

	function handlePage() {
		// Create a new URLSearchParams object
		let params = new URLSearchParams(window.location.search);
		// Set the 'page' parameter to the new page number
		params.set('page', String(pageNumber));
		// Navigate to the new URL
		goto('?' + params.toString());
	}

	function loadItems() {
		if (!isLoading) return;
		isLoading = true;
		pageNumber += 1;
		handlePage();
		console.log(pageNumber);
		isLoading = false;
	}

	$: {
		results = data.data.response.results;
		capitalized = data.params.charAt(0).toUpperCase();
	}
</script>

<h1 class="px-2 py-4 text-3xl">Results for: {capitalized + data.params.slice(1)}</h1>

<section
	class="flex flex-col gap-4 py-4"
	use:infiniteScrollAction={{
		delay: 200,
		distance: 0,
		cb: loadItems
	}}
>
	{#each results as imageObject (imageObject.id)}
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
		<SvgSpinners3DotsMove></SvgSpinners3DotsMove>
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
