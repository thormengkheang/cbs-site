import { Award } from "lucide-react";
import { Footer } from "../_components/footer";
import { PageHeader } from "../_components/page-header";
import { Button } from "@/components/ui/button";

export default function CertificatePage() {
  const url = process.env.NEXT_PUBLIC_SALA_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">
      {/* Header */}
      <PageHeader />

      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-5xl">
            Your Blockchain Summit Certificate
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 md:text-xl">
            Generate and download your personalized certificate of attendance
            for the Cambodia Blockchain Summit 2025.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-purple-400" />
              <h2 className="text-2xl font-bold">Certificate Generator</h2>
            </div>
            {/* <div className="flex gap-3">
              <Button className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div> */}
          </div>

          <div className="relative overflow-hidden rounded-lg bg-white/5 p-1">
            <iframe
              src={url}
              width="100%"
              height="900px"
              style={{ border: "none" }}
              title="Certificate Generator"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <h3 className="mb-2 font-medium text-white">Instructions:</h3>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                Enter your phone number that you have registered with the event
              </li>
              <li>
                Verify your attendance details and make any necessary
                corrections
              </li>
              <li>
                Preview your certificate to ensure all information is correct
              </li>
              <li>
                Download your certificate as a PDF or share it directly to your
                social media
              </li>
            </ol>
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-2xl font-bold text-transparent">
            Share Your Achievement
          </h2>
          <p className="mb-6 text-gray-300">
            Let your network know about your participation in the Cambodia
            Blockchain Summit 2025. Share your certificate on social media using
            the hashtag <span className="text-purple-300">#CBS2025</span>.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#1DA1F2]/20 text-white hover:bg-[#1DA1F2]/30">
              Twitter
            </Button>
            <Button className="bg-[#0077B5]/20 text-white hover:bg-[#0077B5]/30">
              LinkedIn
            </Button>
            <Button className="bg-[#4267B2]/20 text-white hover:bg-[#4267B2]/30">
              Facebook
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
