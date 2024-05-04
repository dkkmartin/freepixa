<script lang="ts">
	import { localFavsStore, imageDataStore } from '$lib/stores/stores';
	import { Button } from '$lib/components/ui/button';
	import { Image } from '@unpic/svelte';
	import Trash from '$lib/components/svg/Trash.svelte';
	import { toast, Toaster } from 'svelte-sonner';
	import { mode } from 'mode-watcher';
	import Close from '$lib/components/svg/Close.svelte';
	import autoAnimate from '@formkit/auto-animate';

	const toastId = toast('Delete mode');
	let markedImages: string[] = [];
	let data = $localFavsStore;
	let deleting: boolean = false;
	let numberOfDeleted: number = 0;

	function handleClickRouting(imageId: string) {
		const selectedImage = data.find((image) => image.id === imageId);
		imageDataStore.set(selectedImage);
	}

	function handleDelete() {
		if (!deleting) return;
		if (markedImages.length === 0) return;
		if (markedImages.length + 1 === $localFavsStore.length) {
			deleteAll();
			toast.success('All images deleted', {
				duration: 3000
			});
		} else {
			markedImages.forEach((imageId) => deleteImage(imageId));
			toast.success(`${numberOfDeleted} images deleted`, {
				duration: 3000
			});
		}
		markedImages = [];
		deleting = false;
		numberOfDeleted = 0;
	}

	function markAsSelected(e: Event, imageId: string) {
		if (markedImages.find((item) => item === imageId)) {
			markedImages = markedImages.filter((item) => item !== imageId);
			(e.target as HTMLElement).style.opacity = '1';
			numberOfDeleted = numberOfDeleted - 1;
		} else {
			markedImages = [...markedImages, imageId];
			(e.target as HTMLElement).style.opacity = '0.2';
			numberOfDeleted = numberOfDeleted + 1;
		}
	}

	function deleteImage(imageId: string) {
		const selectedImage = data.find((image) => image.id === imageId);
		if (selectedImage) {
			localFavsStore.update((currentFavs) => currentFavs.filter((item) => item !== selectedImage));
		}
	}

	function deleteAll() {
		localFavsStore.update((currentFavs) => []);
		toast.success('All images deleted');
	}

	$: {
		data = $localFavsStore;
		if (deleting) {
			toast.warning('Delete mode', {
				id: toastId,
				description:
					numberOfDeleted === 0
						? 'Select images to delete'
						: numberOfDeleted === 1
							? `You are about to delete ${numberOfDeleted} image`
							: `You are about to delete ${numberOfDeleted} images`,
				action: {
					label: 'Confirm',
					onClick: () => handleDelete()
				},
				duration: Number.POSITIVE_INFINITY
			});
		} else {
			toast.dismiss(toastId);
		}
	}
</script>

<Toaster visibleToasts={1} theme={$mode === 'dark' ? 'dark' : 'light'} />
{#if data.length !== 0}
	<section class="flex justify-center border-b p-2">
		{#if deleting}
			<Button
				on:click={() => {
					markedImages = [];
					deleting = false;
					numberOfDeleted = 0;
				}}
				variant="outline"
				size="icon"
			>
				<Close class="size-5"></Close>
			</Button>
		{:else}
			<Button
				on:click={() => {
					deleting = true;
				}}
				variant="outline"
				size="icon"><Trash class="size-5"></Trash></Button
			>
		{/if}
	</section>
{/if}

<section class="px-2 py-4">
	{#if data.length === 0}
		<p class="text-center">No favourites</p>
	{/if}
	<div use:autoAnimate class=" columns-2 gap-2 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4">
		{#each data as item (item.id)}
			{#if deleting}
				<button class="mb-2" on:click={(e) => markAsSelected(e, item.id)}>
					<Image layout="fullWidth" src={item.urls.small} alt={item.alt_description} />
				</button>
			{:else}
				<a href={'/image/' + item.id} on:click={() => handleClickRouting(item.id)}>
					<Image class="mb-2" layout="fullWidth" src={item.urls.small} alt={item.alt_description} />
				</a>
			{/if}
		{/each}
	</div>
</section>
