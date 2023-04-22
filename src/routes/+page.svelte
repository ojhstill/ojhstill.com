

  <div class="hero lg:max-w-screen-lg mx-auto lg:rounded-3xl animation-gradient drop-shadow py-16 px-8 text-left md:text-center transition-all">
  <h1 class="text-slate-100 leading-tight tracking-tighter font-extrabold">
    <!-- <span class="">Electronic Engineering</span> Graduate,
    <br class="hidden lg:block"><span class="">Full-stack Engineer</span>,
    and <span class="">Music Artist</span>. -->
    Full‑stack Software Engineer,
    <br class="hidden sm:block">
    UX-UI Designer,
    <!-- <br class="block sm:hidden"> -->
    and Scrum Master.
  </h1>
</div>

<div class="max-w-screen-lg mx-auto mt-8">
  <div class="sm:container mx-auto px-4 transition-all">
    <p class="text-xl text-slate-300">
      Hi, I'm Oli. 👋 I studied a masters in Electronic Engineering at the University of York,
      and now I'm a Graduate Engineer and Scrum Master for
      <a class="hover:opacity-80 transition-opacity underline decoration-dotted"
         href="https://www.roke.co.uk/"
         target="_blank"
         rel="noreferrer">Roke</a>.
      Here is my complete online portfolio, including all experiences, achievements, and personal projects.
    </p>

    <!-- <div class="text-slate-300 mt-8">
      <h2 class="text-3xl mb-2">Experience</h2>
    </div> -->
  </div>

  <div class="text-center text-slate-300 mt-8">
    <h2 class="text-3xl mb-2">Under Construction</h2>
    <p class="mb-2">
      I'm currently updating this website. For now, please view my
      <a class="hover:opacity-80 transition-opacity underline decoration-dotted"
         href="https://linkedin.com/in/ojhstill"
         target="_blank"
         rel="noopener noreferrer">LinkedIn</a>.
    </p>
    <p>
      <span class="mr-2">📥</span>or
      <a class="hover:opacity-80 transition-opacity underline decoration-dotted"
         href="mailto:oliverjhstill@gmail.com"
         target="_blank">email me!</a>
    </p>
  </div>
</div>

<script>
// Icons
  // import Fa from 'svelte-fa/src/fa.svelte';
  // import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

  // Components

  // Methods

</script>

<!-- <script>
  const faders = document.querySelectorAll('.fade-in');
  const fadeOptions = {
    threshold: 1,
    rootMargin: '0 0 -100px 0'
  };
  const appearOnScroll = IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(element => {
      if (!element.isIntersecting) return;
      else {
        element.target.classList.add('show');
        appearOnScroll.unobserve(element.target);
      }
      
    });
  }, fadeOptions);

  faders.forEach(element => {
    appearOnScroll.observe(element);
  });
</script> -->

<style lang="postcss">
  .hero {
    font-size: 2.75rem;
    /* letter-spacing: 0.025em; */
  }
  .animation-gradient {
    /* color: #e91878; */
    background: #e91878;
    /* background: linear-gradient(45deg, #e91878, #fc8829); */
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 100%;
    background-repeat: repeat;
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent; */
  }

  /* .hero > .blue {
    color: #931de7;
    background: #931de7;
    background: linear-gradient(45deg, #931de7, #118bf5);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  .hero > .green {
    color: #02a9c1;
    background: #02a9c1;
    background: linear-gradient(45deg, #02a9c1, #24d91c);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  } */
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  /* .fade-in {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
  .fade-in.show {
    opacity: 1;
  } */
</style>
