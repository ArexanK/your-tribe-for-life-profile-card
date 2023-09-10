<main>
    <slot/>
</main>


<style>
	main {
		width: 100%;
		height: 100vh;
		display: flex;
		position: relative;
	}

	section {
		width: 20em;
		height: fit-content;
		margin: auto;
		padding: 1em;
		background-color: #d467274a;
		border-radius: 1em;
		opacity: 0;
		z-index: 1;
		animation: fade-in 0.9s 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
	}

	@keyframes fade-in {
		0% {
			transform: translateY(1em);
			opacity: 0;
		}

		66% {
			transform: translateY(-0.33em);
		}

		100% {
			transform: translateY(0em);
			opacity: 1;
		}
	}
</style>