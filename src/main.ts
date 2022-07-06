import App from './routes/__layout.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;