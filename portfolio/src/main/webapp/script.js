// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomMantra() {
  const spsMantras =
      ['“I’m learning everyday to allow the space between where I am and where I want to be to inspire me and not terrify me.” -Yunyi “Carol” Xia', 
      '"Struggle at your level.” -Dani Gallegos Dupuis', 
      '“Manifest your reality.” -Nandini Sharma', 
      '“When there\'s a will, there\'s a way.” -Grace Gong',
      '“Keep learning, keep moving." -Bella Huang',
      '“Not every failure is your fault, but it’s up to you to fix them.” -Michael C. Peters',
      '“I would rather have questions that can\'t be answered than answers that can\'t be questioned.” -Richard Feynman',
      '“Day 1 or One Day.” -Sanjana Jadhav',
      '“Smile at the life, and it will smile back.” -Zhixuan Yang',
      '"The past is past, the future is on the way, I just need to enjoy right now." -Xiaoyue Wang',
      '“Shoot for the moon. Even if you miss, you\'ll land among the stars.” -Dana Al Shekerchi',
      '“Have you tried turning it off and on?” -Chang Huang',
      '“Just keep swimming!” -Me',
      '“You miss 100% of the shots that you don’t take.” -Marielle Belomme',
      '"Visualize your highest self, then start showing up like her.” -Srishti Singh',
      '“I focus on the present.” -Siema Alam',
      '“Luck is what happens when preparation meets opportunity.” -Eric Rivas'];

  // Pick a random mantra.
  const mantra = spsMantras[Math.floor(Math.random() * spsMantras.length)];

  // Add it to the page.
  const mantraContainer = document.getElementById('mantra-container');
  mantraContainer.innerText = mantra;
}
