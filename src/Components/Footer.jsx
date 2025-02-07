
import React from 'react';

const Footer = () => {
    return (
    <footer class="bg-yellow-400 rounded-lg shadow-sm m-4 dark:bg-yellow-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-white">© 2025 <a href="#" class="hover:underline">Ethiopia's Potential</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Register</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Agneda</a>
        </li>
  
    </ul>
    </div>
</footer>

    );
}

export default Footer;

