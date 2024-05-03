<script lang="ts">
	import { localFavsStore } from '$lib/stores/stores';
	import { Image } from '@unpic/svelte';

	let data = $localFavsStore;
</script>

<section class="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
	{#each data as item}
		<Image
			class="object-cover"
			layout="fullWidth"
			src={item.urls.small}
			alt={item.alt_description}
		/>
	{/each}
</section>
