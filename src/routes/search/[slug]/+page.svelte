<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { type UnsplashData } from '$lib/types/unsplash';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { imageDataStore } from '$lib/stores/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let data: UnsplashData;

	let results = data.data.response.results;
	let capitalized = data.params.charAt(0).toUpperCase();
	let imageLoaded: { [key: string]: boolean } = {};

	function handleImageLoad(imageId: string) {
		imageLoaded[imageId] = true;
	}

	function handleClick(imageId: string) {
		const selectedImage = results.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}

	$: {
		results = data.data.response.results;
		capitalized = data.params.charAt(0).toUpperCase();
	}
</script>

<h1 class="px-2 py-4 text-3xl">Results for: {capitalized + data.params.slice(1)}</h1>
<section class="flex flex-col gap-4 py-4">
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
				<Image
					style="display: {imageLoaded[imageObject.id] ? 'block' : 'none'};"
					background="auto"
					layout="fullWidth"
					src={imageObject.urls.small}
					alt={data.params}
					on:load={() => handleImageLoad(imageObject.id)}
				/>
				{#if !imageLoaded[imageObject.id]}
					<Skeleton class="h-[400px] w-full" />
				{/if}
			</a>
		</div>
	{/each}
</section>
