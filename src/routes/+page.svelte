<script>
	import Gallery from '$lib/components/gallery/gallery.svelte';
	import Header from '$lib/components/header/header.svelte';
	import { Input } from '$lib/components/ui/input';
</script>

<Header></Header>

<section class="flex justify-center p-4">
	<Input type="search" placeholder="Search" class="w-2/3"></Input>
</section>

<Gallery></Gallery>

<style>
</style>
