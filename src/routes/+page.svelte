<script>
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { toggleMode } from 'mode-watcher';
</script>

<h1>Hey</h1>

<div class="flex items-center space-x-2">
	<Switch on:click={toggleMode} id="theme-mode"></Switch>
	<Label for="theme-mode">Theme</Label>
</div>
