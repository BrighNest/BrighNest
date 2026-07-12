/**
 * Real customer reviews (collected from the company's review profiles),
 * shown in the on-page carousel (ReviewsCarousel). Quotes are verbatim —
 * do not edit customer wording. `service` labels the job type described
 * in the review itself.
 */
export type Review = {
  quote: string;
  name: string;
  service: string;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Brighnest Cleaning was amazing. I needed a very last minute move-out clean. They gave me a great price and Iryna did an incredible job. She cleaned my 1b/1ba apartment including fridge and oven. The place looks and smells brand new. Absolutely recommend",
    name: "Jax S.",
    service: "Move-out clean",
  },
  {
    quote:
      "This is our first time using their services, and it wont be our last. The service was very professional, easy to book, and their excellent communication made me decide to book a deep cleaning service. The price was reasonable and fair. Thank you, Iryna, for leaving our place spotless!",
    name: "Lina Galavis",
    service: "Deep cleaning",
  },
  {
    quote:
      "Had my house cleaned by BrighNest. Iryna did an excellent job and very professional. Bathroom and Kitchens show the expertise of a company and the expertise that was shown in my kitchen and bathroom made me very pleased. We will be calling them back. Also I appreciate the flexibility they showed with scheduling this appointment.",
    name: "Belinda Haynes",
    service: "House cleaning",
  },
  {
    quote:
      "Really lovely service. Did such a great job helping me clean up my house after an injury.",
    name: "Emily Mullin",
    service: "House cleaning",
  },
  {
    quote:
      "Irina has been absolutely excellent to work with. She does a wonderful job helping me keep my laundry neat, organized, and properly put away. Her folding is meticulous, she pays close attention to detail, and she always follows directions carefully. I truly appreciate her reliability and the care she puts into her work.",
    name: "Jessica Bonk",
    service: "Housekeeping",
  },
  {
    quote:
      "We got a quick response, consulted needs and scheduled service. Our cleaner was punctual, thorough with the deep clean and accommodated requests. Everything looks and smells great. This was a tremendous help and much appreciated assist with our nonstop schedules. We will definitely reach out for additional service.",
    name: "Kevin N.",
    service: "Deep cleaning",
  },
  {
    quote:
      "Grateful for the service provided. Irina was meticulous and took great pride in her work. The house feels energetically expansive and light! Thank you so much!",
    name: "MP Mokeyane",
    service: "House cleaning",
  },
  {
    quote:
      "Iryana and Anastasia were amazing! They were thorough, extremely nice and very responsive. It was an excellent cleaning experience and my apartment looked and smelled fresh! I would recommend this business.",
    name: "Abi T.",
    service: "Apartment cleaning",
  },
  {
    quote:
      "First time experience with a deep cleaning service and Sophia and Irina were EXCELLENT! Showed up on time and did our 4 bd/ 2 1/2 bath, plus basement and left the house looking and smelling brand new. Looking forward to our next project!",
    name: "Rob C.",
    service: "Deep cleaning",
  },
];
