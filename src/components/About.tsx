import React from "react";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import Skills from "../components/SkillCard";
import MusicCard from "./MusicCard";

const About: React.FC = () => {
  return (
    <div className="mx-0 my-16 md:my-20 space-y-8 md:space-y-10">
      <h1 className="text-[#30c555] text-5xl md:text-6xl font-acorn font-bold text-center md:text-left mb-10 md:mb-16">
        .About Me
      </h1>

      <div className="p-0 mb-8 md:mb-16 flex justify-center">
        <div className="w-full p-6 md:p-8 text-white text-center border border-white/10 bg-white/[0.03] backdrop-blur-lg rounded-3xl mx-auto flex items-center justify-center min-h-0">
          <p className="font-sf_pro text-sm md:text-base text-center max-w-3xl mx-auto">
            AI/ML and software engineer specializing in agentic AI, applied LLM
            systems, and evaluation. I build AI agents, MCP servers, RAG
            pipelines, and tool-calling workflows, then rigorously benchmark
            them for safety and robustness (2,160-trial adversarial evals across
            12 agent-model setups). I&apos;ve shipped digital-twin simulations
            with Los Alamos National Lab, deployed LLM agents on Hugging Face,
            and delivered full-stack AI products end-to-end with partners, from
            research to production.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <Skills />
      </div>

      <div className="space-y-12 md:space-y-16">
        {/* Experience */}
        <div className="mt-12 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-acorn font-bold text-[#30c555] mb-6 text-center md:text-left">
            ./experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              title="AI Engineer (Jr. SWE)"
              companyName="Built By The Trades (BBTT), Tempe, AZ"
              dateRange="Aug 2026 - Oct 2026"
              description="Owned ServiceDash, a four-sided real-time marketplace (homeowner, contractor, technician, admin) built as a Next.js 16 and Supabase Turborepo monorepo. Shipped its booking state machine, Stripe hold-and-capture payments with Connect payouts and a conservative reconciliation job, a race-safe dispatch engine, and a ~40-screen UI rebuild. Built Foreman, a Claude API help assistant grounded strictly in internal guides, plus ES256 cross-app SSO and seat-based Stripe subscription billing for the Toolbox platform."
            />
            <ExperienceCard
              title="Software Developer"
              companyName="School of Manufacturing Systems & Networks, Ira A. Fulton Schools of Engineering"
              dateRange="Dec 2023 - May 2026"
              description="Collaborated with Los Alamos National Laboratory to deliver high-fidelity VR simulation modules, improving immersive training accuracy by 30% across real-world physical workflows. Designed interactive simulation systems with real-time feedback loops for complex physical task training in VR-based environments. Optimized C++ digital-twin simulation pipelines, reducing runtime latency by 15% in real-time training environments."
              logo="/msn.webp"
            />
            <ExperienceCard
              title="Software Engineer"
              companyName="Laboratory for Energy and Power Solutions (LEAPS), ASU"
              dateRange="Jan 2023 - Oct 2023"
              description="Built AR/VR microgrid training systems enabling real-time interactive visualization of power networks, deployed across 10+ institutions."
              logo="/leaps.webp"
            />
            <ExperienceCard
              title="Software Lead"
              companyName="Shonto Solar Engineering Team, EPICS, ASU"
              dateRange="Aug 2022 - Dec 2022"
              description="Led a 6-member team building an IoT-based solar microgrid monitoring system for 500+ residents, integrating sensor data, cloud storage, and real-time alerting."
              logo="/epics.webp"
            />
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h1 className="text-3xl md:text-4xl font-acorn font-bold text-[#30c555] mb-6 text-center md:text-left">
            ./leadership
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ExperienceCard
              title="Technical Officer & Treasurer"
              companyName="Google Developer Student Club, ASU"
              dateRange="Jan 2022 - May 2026"
              description="Mentored 750+ students and led workshops on AI/ML, cloud, MLOps, and full-stack development; organized hackathons and technical bootcamps."
              logo="/asu_dsc.webp"
            />
            <ExperienceCard
              title="Officer"
              companyName="PIERA (India Policy & Economy Research Club)"
              dateRange="Mar 2025 - Present"
              description="Led research seminars and mentored 50+ students in geopolitics and policy analysis on India's economic and technical development."
              logo="/piera.webp"
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl md:text-4xl font-acorn font-bold text-[#30c555] mb-6 text-center md:text-left">
            ./education
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EducationCard
              degreeType="Major"
              degreeName="M.S. in Computer Science"
              concentration="Concentration: AI/ML"
              schoolName="Ira A. Fulton Schools of Engineering"
              collegeName="School of Computing and Augmented Intelligence"
              universityName="Arizona State University"
              degreeDateRange="May 2026 · GPA 3.78"
              description="Relevant coursework: Agentic AI, Robotics Learning, Natural Language Processing, Cloud Computing, and AI/ML."
              logo="/asu_logo.webp"
              className=""
            />
            <EducationCard
              degreeType="Major"
              degreeName="B.S. in Computer Science"
              concentration="Minors: Games Development & Design, Pop Music"
              schoolName="Ira A. Fulton Schools of Engineering"
              collegeName="School of Computing and Augmented Intelligence"
              universityName="Arizona State University"
              degreeDateRange="May 2025 · GPA 3.69"
              description="Relevant coursework: Data Structures & Algorithms, Software Engineering, DBMS, and Artificial Intelligence."
              logo="/asu_logo.webp"
              className=""
            />
          </div>
        </div>

        {/* Off the clock */}
        <div>
          <h1 className="text-3xl md:text-4xl font-acorn font-bold text-[#30c555] mb-6 text-center md:text-left">
            ./off-the-clock
          </h1>
          <MusicCard />
        </div>
      </div>
    </div>
  );
};

export default About;
