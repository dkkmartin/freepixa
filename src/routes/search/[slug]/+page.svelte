<script lang="ts">
	import { Image } from '@unpic/svelte';
	import { type UnsplashData } from '$lib/types/unsplash';
	import * as Pagination from '$lib/components/ui/pagination';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { imageDataStore } from '$lib/stores/stores';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { mediaQuery } from 'svelte-legos';
	import { goto } from '$app/navigation';

	export let data: UnsplashData;

	console.log(data);
	let results = data.data.response.results;
	let capitalized = data.params.charAt(0).toUpperCase();
	let imageLoaded: { [key: string]: boolean } = {};
	let count: number;
	let currentPageNumber: number;

	const isDesktop = mediaQuery('(min-width: 768px)');

	$: perPage = $isDesktop ? 2 : 10;
	$: siblingCount = $isDesktop ? 2 : 0;

	function handleImageLoad(imageId: string) {
		imageLoaded[imageId] = true;
	}

	function handleClick(imageId: string) {
		const selectedImage = results.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}

	function handlePage(pageNumber: number) {
		currentPageNumber = pageNumber;
		// Create a new URLSearchParams object
		let params = new URLSearchParams(window.location.search);

		// Set the 'page' parameter to the new page number
		params.set('page', String(pageNumber));

		// Navigate to the new URL
		goto('?' + params.toString());
	}

	$: {
		results = data.data.response.results;
		capitalized = data.params.charAt(0).toUpperCase();
		count = data.data.response.total;
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
				<div
					class:image-visible={imageLoaded[imageObject.id]}
					class:image-hidden={!imageLoaded[imageObject.id]}
				>
					<Image
						layout="fullWidth"
						src={imageObject.urls.small}
						alt={data.params}
						on:load={() => handleImageLoad(imageObject.id)}
					/>
				</div>
				{#if !imageLoaded[imageObject.id]}
					<Skeleton class="h-[400px] w-full" />
				{/if}
			</a>
		</div>
	{/each}
</section>

<Pagination.Root class="py-4" {count} {perPage} {siblingCount} let:pages let:currentPage>
	<Pagination.Content>
		<Pagination.Item>
			<Pagination.PrevButton on:click={() => handlePage((currentPage || 0) - 1)}
			></Pagination.PrevButton>
		</Pagination.Item>
		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<Pagination.Item>
					<Pagination.Ellipsis />
				</Pagination.Item>
			{:else}
				<Pagination.Item>
					<Pagination.Link
						{page}
						isActive={currentPage === page.value}
						on:click={() => handlePage(page.value)}
					>
						{page.value}
					</Pagination.Link>
				</Pagination.Item>
			{/if}
		{/each}
		<Pagination.Item>
			<Pagination.NextButton on:click={() => handlePage((currentPage || 0) + 1)}
			></Pagination.NextButton>
		</Pagination.Item>
	</Pagination.Content>
</Pagination.Root>

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
