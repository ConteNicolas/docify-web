<script lang="ts">
    import { goto } from "$app/navigation";
</script>

<div class="min-h-screen bg-gradient-to-r from-purple-800 via-purple-600 to-orange-600 text-white flex flex-col">
  <header class="flex justify-between items-center px-8 py-6">
      <a href="/" class="text-4xl font-semibold whitespace-nowrap pacifico-regular">
          Docify 🗃️
      </a>
      <nav class="flex space-x-4">
          <button 
              class="rounded-lg bg-purple-700 hover:bg-purple-600 text-white font-semibold px-4 py-2 transition"
              on:click={() => goto("/sign-up")}
          >
              Sign up
          </button>
          <button 
              class="border-none text-white font-semibold px-4 py-2 transition hover:bg-orange-500 hover:text-white"
              on:click={async() => await goto("/sign-in")}
          >
              Sign in
          </button>
      </nav>
  </header>

  <!-- Main Section -->
  <main class="flex-1 flex flex-col items-center justify-center text-center space-y-8 mt-20 px-4">
      <h1 class="text-6xl font-bold">
          Work smarter with <span class="pacifico-regular text-orange-500">Docify</span>.
      </h1>
      <p class="text-xl max-w-2xl">
          Docify simplifies your API documentation, with a modern platform to centralize,
          manage, and share your API specs effortlessly.
      </p>

      <!-- Call to Action Buttons -->
      <div class="flex space-x-6">
          <button
              class="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
              on:click={async() => await goto("/sign-up")}
          >
              Get started
          </button>
          <button
              class="border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition"
              on:click={async() => await goto("/marketplace")}
          >
              Explore API marketplace
          </button>
      </div>

      <p class="text-md">
          Try Docify Business free for 30 days. No credit card required.
      </p>
  </main>

  <!-- Footer -->
  <footer class="mt-10 flex justify-center w-full">
      <p class="text-sm">
          &copy; 2024 Docify. All rights reserved.
      </p>
  </footer>
</div>
