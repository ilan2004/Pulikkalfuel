import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/time";

export function TimelineDemo() {
    const data = [
        {
          title: "Our Values:",
          content: (
            <div>
          <h2 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-6">
            At Pulikkal Fuels, we are guided by the following core values:
          </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Customer Satisfaction</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We prioritize our customers above all else. Our team is committed to providing a seamless and satisfying experience every time you visit us.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Quality Assurance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We maintain the highest standards of quality, ensuring that the fuel you receive is reliable and our services are consistently top-notch.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Integrity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Transparency and honesty are at the heart of everything we do. You can trust that with Pulikkal Fuels, you are always getting the best.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
    {
      title: "Our Goals:",
      content: (
        <div>
        <h2 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold mb-6">
          At Pulikkal Fuels, we are guided by the following core values:
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Continuous Improvement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                We are dedicated to enhancing our services and facilities to meet and exceed customer expectations. Our goal is to stay ahead in the industry by embracing innovation and providing cutting-edge solutions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Community Involvement:</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                Pulikkal Fuels is committed to being a responsible and engaged member of the Musliyarangady community. We support local initiatives and strive to contribute positively to the well-being of our neighbors.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">Sustainability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                We are dedicated to minimizing our environmental impact through sustainable practices, ensuring that our operations contribute to a cleaner, greener future.
                </p>
              </div>
            </div>
          </div>
      ),
    },
    {
        title: "Meet the Leadership Team",
        content: (
          <div className="space-y-6">
            <p className="text-gray-800 dark:text-gray-200">
              At Pulikkal Fuels, our success is guided by a strong leadership team that is committed to excellence and customer satisfaction. With over 7 years of experience in the industry, our two visionary leaders have built a reliable and trusted fuel station, supported by a dedicated team of over 30 skilled staff members.
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Our Leaders:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our leadership team is focused on maintaining the highest standards of service and quality. Their deep industry knowledge and commitment to integrity ensure that Pulikkal Fuels is a name you can trust. They believe in continuous improvement and innovation, striving to exceed customer expectations in every aspect of our operations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">Our Team:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Under their guidance, our team of over 30 professionals works tirelessly to deliver exceptional service to every customer who visits Pulikkal Fuels. We are committed to creating a welcoming and efficient environment, where customer satisfaction is always the top priority.
              </p>
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              Together, our leadership and staff ensure that Pulikkal Fuels remains a reliable and customer-focused service provider in Musliyarangady, dedicated to making every journey smooth and satisfying.
            </p>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
