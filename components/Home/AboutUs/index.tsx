import {
  DocumentCheckIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";

type Feature = {
  name: string;
  description: string;
  icon: ReactElement;
};

const features: Feature[] = [
  {
    name: "Community Building and Support",
    description:
      "Create a welcoming community where the elderly can connect with us and share their experiences. Encourage intergenerational interaction by involving younger volunteers in the learning process.",
    icon: <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  },
  {
    name: "Regular Updates and Resources",
    description:
      "Keep the elderly informed about the technology trends and updates. Share relevant news and articles, as well as reviews and recommendations for tech products and services.",
    icon: (
      <DocumentCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
    ),
  },
  {
    name: "Accessible Learning Materials",
    description:
      "Provide user-friendly, step-by-step resources, both online and offline, specifically designed for the elderly. The materials are easily accessible, even for those with limited tech experience.",
    icon: <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white pb-24 sm:pb-32 pt-12" id="who-we-are">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded by a group of passionate individuals who saw the potential
            of technology to enhance the lives of the elderly, our journey began
            with a simple idea: to provide accessible resources and guidance
            tailored to the unique needs and interests of older generations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5271FF]">
                    {feature.icon}
                  </div>
                  <p className="text-xl">{feature.name}</p>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
