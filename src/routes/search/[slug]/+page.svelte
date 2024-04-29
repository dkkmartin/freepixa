<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { type UnsplashData } from '$lib/types/unsplash';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { imageDataStore } from '$lib/stores/stores';

	export let data: UnsplashData;

	const results = data.data.response.results;
	const capitalized = data.params.charAt(0).toUpperCase();

	function handleClick(imageId: string) {
		const selectedImage = results.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}
</script>

<h1 class="px-2 text-3xl">{capitalized + data.params.slice(1)}</h1>
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
				<Image layout="fullWidth" src={imageObject.urls.small} alt={data.params} />
			</a>
		</div>
	{/each}
</section>
