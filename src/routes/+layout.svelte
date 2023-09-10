<main>
    <slot/>

<style>
	main {
		width: 100%;
		height: 100vh;
		display: flex;
		position: relative;
	}

	section {
		width: 30em;
		height: fit-content;
		margin: auto;
		padding: 1em;
		background-color: #faf0e6;
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


    p {
		max-width: 30em;
		margin-bottom: 1em;
        
	}

    img {
		width: 15em;
		height: auto;
		aspect-ratio: 1/1;
		border-radius: 0.5em;
	}


button {
  border: none;
  color: #000;
}
button:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
button:hover {
  color: #000;
}

button:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}

button:active {
  top: 2px;
}



</style>

</main>