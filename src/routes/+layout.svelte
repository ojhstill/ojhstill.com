<div class="antialiased min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-900">

  <!-- Navbar -->
  <nav class="container max-w-screen-lg mx-auto flex items-center justify-between px-4 py-4">
    <a href="/" class="text-4xl font-extralight tracking-wider text-zinc-100 whitespace-nowrap">ojhstill</a>
    <!-- Social Links -->
    <ul class="flex items-center">
      <!-- GitHub -->
      <li class="ml-6">
        <a href="https://github.com/ojhstill"
           target="_blank"
           rel="noopener noreferrer">
          <Fa icon={faSquareGithub} class="text-4xl text-zinc-100 hover:opacity-70 transition-opacity" />
        </a>
      </li>
      <!-- LinkedIn -->
      <li class="ml-6">
        <a href="https://linkedin.com/in/ojhstill"
           target="_blank"
           rel="noopener noreferrer">
          <Fa icon={faLinkedin} class="text-4xl text-zinc-100 hover:opacity-70 transition-opacity" />
        </a>
      </li>
      <!-- Download CV -->
      <li class="ml-6">
        <AppButton class="h-8" disabled={true} onClick={viewCv}>
          <Fa icon={faFileAlt} class="text-xl mr-2" />View CV
        </AppButton>
      </li>
    </ul>
  </nav>

  <!-- Page Content -->
  <main>
    <slot />
  </main>

  <!-- Footer -->
  <footer class="py-6 text-center">
    <small class="text-zinc-400">
      &copy; {new Date().getFullYear()} Oliver Still. All rights reserved.
      Made using
      <a class="hover:opacity-70 transition-opacity"
         href="https://kit.svelte.dev/" 
         target="_blank" 
         rel="noopener noreferrer">SvelteKit</a> &
      <a class="hover:opacity-70 transition-opacity"
         href="https://tailwindcss.com/"
         target="_blank"
         rel="noopener noreferrer">Tailwind CSS</a>.
    </small>
  </footer>
</div>

<script>
  import '../app.css';

  // Icons
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
  import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

  // Components
  import AppButton from '../components/AppButton.svelte';

  // Methods
  function viewCv() {
  // window.open('Oliver Still - Curriculum Vitae.pdf', '_blank');
  }
</script>
