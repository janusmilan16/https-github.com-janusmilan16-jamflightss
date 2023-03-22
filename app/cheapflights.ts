export interface CheapFlights {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const cheapflights: CheapFlights[] = [
  {
    id: 1,
    name: 'Boracay Round Trip',
    price: 6099,
    description:
      'Boracay is a popular tourist destination in the Philippines known for its white sand beaches, crystal clear waters, and vibrant nightlife.',
    image:
      'https://images.pexels.com/photos/11686040/pexels-photo-11686040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Palawan Round Trip',
    price: 7799,
    description:
      'Palawan offers activities including island hopping, snorkeling, and visiting the Underground River in Puerto Princesa. You can also explore the beaches of El Nido or Coron.',
    image:
      'https://images.pexels.com/photos/1076240/pexels-photo-1076240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Siargao Round Trip',
    price: 10199,
    description:
      'Siargao is a year-round destination, but the best time to visit is from March to October when the weather is dry and the waves are perfect for surfing.',
    image:
      'https://images.pexels.com/photos/15931909/pexels-photo-15931909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
