<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Card } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let dark = false;

	function toggleTheme() {
		dark = !dark;
		const root = document.documentElement;
		root.classList.toggle('dark', dark);
	}
</script>

<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
	<Navbar>
		<NavBrand href="/">
			<span class="text-xl font-semibold dark:text-white self-center whitespace-nowrap"
				>Potlucky</span
			>
		</NavBrand>
		<div class="md:order-2 flex">
			<Button size="sm" onclick={toggleTheme} pill>{dark ? 'Light' : 'Dark'} mode</Button>
			<NavHamburger />
		</div>
		<NavUl class="order-1">
			<NavLi href="/playground/ui">UI Playground</NavLi>
			<NavLi href="/dashboard">Dashboard</NavLi>
		</NavUl>
	</Navbar>

	<div class="max-w-5xl p-6 space-y-6 mx-auto">
		<div class="flex items-center justify-between">
			<h1 class="text-2xl font-semibold">Flowbite-Svelte Playground</h1>
		</div>

		<div class="gap-6 md:grid-cols-2 grid">
			<Card>
				<h2 class="mb-2 text-xl font-semibold">Buttons</h2>
				<div class="gap-3 flex flex-wrap">
					<Button>Primary</Button>
					<Button color="alternative">Alternative</Button>
					<Button color="green">Success</Button>
					<Button color="red">Failure</Button>
					<Button color="yellow">Warning</Button>
					<Button color="dark">Dark</Button>
					<Button outline>Pill Outline</Button>
				</div>
			</Card>

			<Card>
				<h2 class="mb-2 text-xl font-semibold">Card</h2>
				<p class="text-sm text-gray-600 dark:text-gray-300">
					Это пример карточки из Flowbite-Svelte. Тема и стили подтягиваются через Tailwind.
				</p>
				<div class="mt-4">
					<Button color="green">Action</Button>
				</div>
			</Card>
		</div>
	</div>
</div>
