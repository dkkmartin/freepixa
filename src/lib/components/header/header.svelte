<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Search from '../svg/search.svelte';
	import { Button } from '../ui/button';
	import ThemeToggler from './themeToggler.svelte';
	import { animate } from 'motion';
	import Spinner from '../svg/SvgSpinners180Ring.svelte';

	let clicked: boolean = false;
	let loading: boolean = false;
	let inputElement: HTMLElement;
	let searchTerm: string;

	const focusSearch = async () => {
		await new Promise((res) => setTimeout(res, 500));
		inputElement?.focus();
	};

	const handleSearch = async (e: Event) => {
		e ? e.preventDefault() : null;
		if (searchTerm) {
			loading = true;
			goto('/search/' + searchTerm);
			await new Promise((res) => setTimeout(res, 500));
			loading = false;
			searchAnimationClose();
			searchTerm = '';
		} else {
			searchAnimationClose();
		}
	};

	const searchAnimationOpen = () => {
		animate('#search-input', { opacity: [0, 1] }, { delay: 0.4 });
		animate('.search-button', { width: '180px' }, { easing: 'ease-in-out', duration: 0.5 });
		clicked = true;
	};

	const searchAnimationClose = () => {
		animate('#search-input', { opacity: [1, 0] }, { delay: 0.4 });
		animate('.search-button', { width: '2.25rem' }, { easing: 'ease-in-out', duration: 0.5 });
		clicked = false;
	};

	onMount(() => {
		inputElement?.focus();
	});
</script>

<header class="flex items-center justify-between border-b p-2 shadow-sm">
	<a href="/">
		<h1 class="heading-title text-5xl">FreePixa</h1>
	</a>
	<div class="flex items-center gap-3">
		<div
			class="search-button flex h-9 w-9 items-center overflow-hidden rounded-[calc(var(--radius)-2px)] border"
		>
			{#if loading}
				<Spinner class="size-5"></Spinner>
			{:else}
				<Button
					aria-label="Search"
					variant="ghost"
					size="icon"
					class="relative -top-[1px] min-w-9"
					on:click={async () => {
						if (!clicked) {
							searchAnimationOpen();
							focusSearch();
						} else {
							searchAnimationClose();
							if (searchTerm) {
								loading = true;
								// @ts-ignore
								handleSearch();
								await new Promise((res) => setTimeout(res, 500));
								loading = false;
							} else {
								return;
							}
						}
					}}
				>
					<Search class="size-5"></Search>
				</Button>
			{/if}
			<form on:submit={handleSearch}>
				<input
					id="search-input"
					bind:this={inputElement}
					bind:value={searchTerm}
					type="search"
					placeholder="Search"
					class="border-none {clicked ? '' : 'hidden'}"
				/>
			</form>
		</div>
		<ThemeToggler></ThemeToggler>
	</div>
</header>

<style>
	.heading-title {
		font-family: 'Jersey 25', sans-serif;
	}

	.hidden {
		display: none;
	}

	input {
		border: none;
		background-color: initial;
		outline: none;
		max-width: 135px;
	}
</style>
