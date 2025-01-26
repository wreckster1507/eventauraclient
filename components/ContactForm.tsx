import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MainMenusGradientCard } from "./eldoraui/animatedcard";
import FAQ from "./FAQ";
import { Mail, Linkedin, Instagram } from "lucide-react"; // Ensure these icons are imported

const Socials = () => (
  <div className="flex space-x-4">
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Mail className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
      <Instagram className="w-5 h-5" />
    </a>
  </div>
);

export function ContactForm() {
  return (
    <div className="min-h-[calc(100vh-2rem)] rounded-xl py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-500 animate-fade-in">
            CONTACT US
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl animate-fade-in delay-100">
            Let&apos;s Solve This Together
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10 animate-fade-in delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MainMenusGradientCard
                description="support@eventaura.tech"
                title="Email Address"
              />
              <MainMenusGradientCard title="Socials" description="Connect with us!">
                <Socials/>
              </MainMenusGradientCard>
            </div>
            <FAQ />
          </div>
          <Card className="bg-white/50 backdrop-blur-sm border-neutral-200/50 shadow-xl animate-fade-in delay-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-black mb-8">Send us a Message</h2>
              <form className="space-y-6">
                {["name", "email", "message"].map((field) => (
                  <div key={field} className="group relative transition-all duration-300">
                    <label
                      htmlFor={field}
                      className="absolute -top-2 left-3 px-1 text-xs font-medium text-gray-600 bg-white"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}*
                    </label>
                    {field === "message" ? (
                      <Textarea
                        id={field}
                        name={field}
                        placeholder={`Enter your ${field}`}
                        required
                        className="min-h-[160px] w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-base placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                      />
                    ) : (
                      <Input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Enter your ${field}`}
                        required
                        className="h-12 w-full rounded-lg border border-neutral-300 bg-transparent px-4 text-base placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="group relative flex h-12 w-full items-center justify-between rounded-full border-2 border-[#394481] bg-gradient-to-r from-[#f7f8ff] to-[#ffffff] font-medium text-black transition-all hover:shadow-lg"
                >
                  <span className="pl-4">Send Message</span>
                  <div className="relative mr-1 h-9 w-9 overflow-hidden rounded-full bg-black">
                    <div className="absolute left-[-0.1em] top-[0.7em] grid h-full w-full place-content-center transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-white"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-1 h-5 w-5 -translate-x-4 fill-white"
                      >
                        <path
                          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
