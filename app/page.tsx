import Image from "next/image";
import { TryItForm } from "./form";
import Link from "next/link";
import { Links } from "./links";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="min-h-screen flex flex-col mx-auto">
        <div className="w-full bg-gray-900 text-white flex items-center justify-center flex-col">
          <div className="w-full flex flex-col items-center justify-center">
            <Image
              src="/images/JMP-white.svg"
              width={320}
              height={320}
              alt="JSON Merge Patch logo"
            />
            <h1 className="text-2xl -mt-4 mx-4">
              Free JSON Merge Patch Tool and API
            </h1>
            <div className="absolute top-4 right-4 h-[32px] flex gap-x-1">
              <iframe
                className="hidden sm:flex"
                src="https://ghbtns.com/github-btn.html?user=zuplo-samples&repo=json-merge-patch-www&type=star&count=true&size=large"
                frameBorder="0"
                scrolling="0"
                width="120"
                height="34"
                title="GitHub"
              ></iframe>
              <Links />
            </div>
            <div className="flex sm:hidden items-center mt-6">
              <iframe
                className="sm:hidden"
                src="https://ghbtns.com/github-btn.html?user=zuplo-samples&repo=json-merge-patch-www&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="85"
                height="20"
                title="GitHub"
              ></iframe>
              <a
                target="_blank"
                className="flex sm:hidden items-center gap-x-1 bg-[#5865F2] h-[22px] border border-[#464ec7] hover:bg-[#464ec7] p-1 py-[4px] rounded-[4px]"
                href="https://discord.zuplo.com"
              >
                <Image
                  className="h-[12px] w-auto"
                  height={12}
                  width={12}
                  alt="Discord"
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                />
                <p className="text-white text-xs font-semibold">Discord</p>
              </a>
            </div>
          </div>
          <div className="w-[400px] sm:w-[800px] mx-4 flex flex-col my-8 mt-6 gap-y-3">
            <h2 className="font-semibold text-lg">What is JSON Merge Patch?</h2>
            <p className="mb-4">
              JSON Merge Patch is a standardized method for partially updating
              JSON documents, defined in
              <a
                href="https://tools.ietf.org/html/rfc7396"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                {" "}
                RFC 7396
              </a>
              . It provides a simple way to describe changes to a JSON document,
              making it ideal for API interactions and data synchronization
              tasks.{" "}
              <a
                href="https://zuplo.com/blog/2024/10/11/what-is-json-merge-patch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Learn more
              </a>
            </p>
            <h2 className="font-semibold text-lg">
              How JSON Merge Patch Works
            </h2>
            <ul className="list-disc pl-6 mb-4 ">
              <li>
                The patch is a JSON document itself, describing the changes to
                be made to the target document.
              </li>
              <li>
                Properties in the patch replace corresponding properties in the
                target.
              </li>
              <li>
                A null value in the patch removes the property from the target.
              </li>
              <li>
                Properties not mentioned in the patch remain unchanged in the
                target.
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex w-full mx-auto my-8">
          <TryItForm />
        </div>
        <footer className="bg-gray-900">
          <div className="sm:p-2 container mx-auto flex gap-y-2 flex-col justify-center items-center p-5 mt-1 text-lg text-gray-500 md:text-xl">
            <div className="flex gap-x-3">
              <Link
                href="https://twitter.com/zuplo"
                className="group"
                target="_blank"
                aria-label="Zuplo on Twitter"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-200 group-hover:fill-white"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://github.com/zuplo-samples/json-merge-patch-www"
                className="group"
                target="_blank"
                aria-label="JSON merge patch on GitHub"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-200 group-hover:fill-white"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
              <Link
                target="_blank"
                className="group fill-slate-200"
                href="https://discord.zuplo.com"
              >
                <svg
                  className="h-6 w-6 fill-slate-200 group-hover:fill-white"
                  viewBox="0 -28.5 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="text-slate-200">
              Created with ❤️ by{" "}
              <a
                href="https://zuplo.com/?utm_source=json-merge-patch"
                target="_blank"
                className="font-bold transition  hover:text-[#ff00bd]"
              >
                Zuplo
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
