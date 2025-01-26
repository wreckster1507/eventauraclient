// 'use client';
// import React, { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Plus } from 'lucide-react';

// const tabs = [
//   {
//     title: 'How do UI components improve UX?',
//     description:
//       'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
//   },
//   {
//     title: 'Common UI component design challenges?',
//     description:
//       'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
//   },
//   {
//     title: 'Ensuring UI component responsiveness?',
//     description:
//       '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
//   },
// ];
// function index() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);
//   const [activeItem, setActiveItem] = useState<
//     | {
//         title: string;
//         description: string;
//         imageUrl: string;
//       }
//     | undefined
//   >(tabs[0]);

//   const handleClick = async (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//     const newActiveItem = tabs.find((_, i) => i === index);
//     setActiveItem(newActiveItem);
//   };

//   return (
//     <>
//       <div className='container mx-auto pb-10 pt-2'>
//         <h1 className='uppercase text-center text-4xl font-bold pt-2 pb-4'>
//           FAQ
//         </h1>
//         <div className='h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]'>
//           {tabs.map((tab, index) => (
//             <motion.div
//               key={index}
//               className={`overflow-hidden ${
//                 index !== tabs.length - 1 ? 'border-b' : ''
//               }`}
//               onClick={() => handleClick(index)}
//             >
//               <button
//                 className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
//                `}
//               >
//                 <Plus
//                   className={`${
//                     activeIndex === index ? 'rotate-45' : 'rotate-0 '
//                   } transition-transform ease-in-out w-5 h-5  dark:text-gray-200 text-gray-600`}
//                 />
//                 {tab.title}
//               </button>
//               <AnimatePresence mode='sync'>
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{
//                       duration: 0.3,
//                       ease: 'easeInOut',
//                       delay: 0.14,
//                     }}
//                   >
//                     <p
//                       className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
//                     >
//                       {tab.description}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default index;


'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tabs = [
  {
    title: 'What is EventAura, and how does it work?',
    description:
      'EventAura is an all-in-one event ticketing and management platform that simplifies event creation, participant registration, and payment processing. Organizers can set up events, manage registrations, and access insights through our intuitive platform.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Is my payment secure on EventAura?',
    description:
      'Yes, absolutely! We have partnered with trusted payment gateways like PhonePay to ensure all transactions are secure and encrypted, providing peace of mind for both organizers and participants.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'How does the dynamic QR ticketing system work?',
    description:
      'Upon successful registration and payment, participants receive a unique QR code via email. This QR code can be scanned at the event for quick and hassle-free check-in, streamlining the authentication process.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'Can I create both paid and free events using EventAura?',
    description:
      'Yes, you can create paid events, free events, or even hybrid ones. Our platform supports seamless payment processing for paid events and secure registration for all event types.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'Is EventAura suitable for student-driven events and college clubs?',
    description:
      'Definitely! EventAura is perfect for student communities and college clubs. Our platform simplifies registration, ensures secure payments, and makes managing events effortless, even for beginners.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'How does the automated mailing system help?',
    description:
      'Once participants complete their registration and payment, the system automatically sends them an email with event details, a unique QR ticket, and other relevant information, saving time and effort for organizers.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'What measures do you take to protect user data?',
    description:
      'We prioritize data security and privacy. Our platform uses advanced security protocols to protect sensitive information and complies with data privacy regulations to build trust with our users.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
  {
    title: 'How do I create and publish an event on EventAura?',
    description:
      'Creating an event is easy! Simply sign up or log in to your EventAura account, navigate to the "Create Event" section, and fill in details like event name, date, time, venue, ticket type, and pricing. Once you are satisfied, publish the event, and it will be live for attendees to view and register.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<
    | {
        title: string;
        description: string;
        imageUrl: string;
      }
    | undefined
  >(tabs[0]);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <div className="container mx-auto pb-10 pt-2">
      <h1 className="uppercase text-center text-4xl font-bold pt-2 pb-4">FAQ</h1>
      <div className="h-fit border rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${index !== tabs.length - 1 ? 'border-b' : ''}`}
            onClick={() => handleClick(index)}
          >
            <button
              className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black flex gap-2`}
            >
              <Plus
                className={`${
                  activeIndex === index ? 'rotate-45' : 'rotate-0 '
                } transition-transform ease-in-out w-5 h-5 dark:text-gray-200 text-gray-600`}
              />
              {tab.title}
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.14,
                  }}
                >
                  <p className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}>
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
