import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Biography() {
    return (
        <section>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
                    <TypeAnimation
                    preRenderFirstString={true}
                     sequence={[
                        "I'm Hampton",
                        10000,
                        "I'm a Chemist",
                        3000, 
                        "I'm a Data Scientist",
                        3000,
                        "I'm a Researcher",
                        3000,
                        "I'm an Academic",
                        3000,
                        "I'm a Drug Discovery Scientist",
                        3000, 
                        "I'm a HPC Administrator",
                        3000,
                        "I'm a Selfhoster",
                        3000,
                        "I'm an Engineer",
                        3000, 
                        "I'm a Mechanic",
                        3000,
                        "I'm a Project Collaborator",
                        3000,
                        "I'm a Fast Learner",
                        3000,
                        "I'm a Problem Solver",
                        3000, 
                        "I'm a Family Businessman",
                        3000,
                        "I'm a Search and Rescue Volunteer",
                        3000,
                        "I'm a Student",
                        3000,
                        "I'm a Thinker",
                        3000,
                        "I'm a Builder",
                        3000,
                        "I'm an Explorer",
                        3000
                    ]}
                    wrapper="span"
                    speed={25}
                    style={{ fontSize: 'em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                    </h2>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
                    </div>
                </div>
                <h1>
                    <p className="sm:text-2m leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    I grew up on a small farm in rural California with my parents and two sisters. On 6 acres, I spent my early days outside thinking, building, and exploring. I was a curious kid, as I am reminded now my father would point out things and provide me with stories as we drove along the backroads of Los Angeles County. In a place known for being the aerospace capital of the world, there was never any shortage of stories to tell.  
                    <br className="hidden lg:inline-block" />
                    In the 3rd grade I was introduced to science, and I knew that it would be my career. By the 8th grade I was introduced to chemistry. After the first half of my 8th grade year, I wanted to learn more about chemistry. I was infatuated with the idea of taking a material and altering it into something completely different. My parents permitted me to further this quest and attend my local community college where I enrolled in Chemistry 101, which I passed at the age of 15. I also joined the Civil Air Patrol and quickly gravitated to the communications unit. I would become qualified as a Ground Team Member (GTM), Mission Radio Operator (MRO), and trained as a Communications Unit Leader (CUL). I would be selected to be one of two CULs to demonstrate a statewide emergency communications network for a Search and Rescue evaluation by the United States Air Force. During this time, we formed a team to compete in the Cyber Patriot competition. In this setting I was introduced to Offensive Security, Packet Networking, and Linux. I became the Network Security Specialist and learned secure IPv4 networking. Our team would go on to the State Semi-Finals where we were bested by another team in the competition.  
                    <br className="hidden lg:inline-block" />
                    In 2015, I spent my first year of high school in a hybrid learning environment. The internet had matured and became my new playground to think, build, and explore. I quickly found Organic Chemistry, but It was not until my sophomore year in AP chemistry that I realized it would be my direction. I continued my pursuit on my own as I felt limited in traditional education. It was not long before I was truly distasteful of school and my grades suffered. In my senior year I had taken all math and physical sciences offered by my high school and I began to branch into other directions. I learned principles digital electronics, Automotive Repair, Engineering, and Computer Science.  
                    <br className="hidden lg:inline-block" />
                    With a low GPA and little proof of accomplishment, I received rejection letters from every 4-year university I applied to. I then pushed on and continued into another community college where I was exposed to new and interesting mathematics before it was all cut short by the global corona virus pandemic starting in 2019 (The worst part is my golf instructor had just corrected the slice in my swing a week before all classes halted). By 2021 the pandemic was dying down. Feeling trapped in California, I searched for a change in scenery. On a whim, I applied to the College of Basic and Applied Sciences at Middle Tennessee University. I was joyous when a short while longer I was accepted, and my parents agreed with my decision. I spent the following years in what would be a more prosperous environment than i originally imagined. The science building had then become my new place to think, build and explore. I was fostered by great mentors and great professors who guided me. In the summer 2022, I met Dr. Souvik Banerjee. I would join his research team as just a chemistry student, by graduation I would be an experienced medicinal research chemist. During this time, I would face a second professor who would challenge me. Dr. Anatoliy Volkov instructed me though Physical Chemistry, where I took interest in the deeper intricacies of chemistry and chemical theory. In the following semesters, I would continue my research with Dr. Banerjee while exploring scientific computing with Dr. Volkov. The crossroads of these fields would then become my Master's Thesis, where I am today. 
                    </p>
                    </h1>
            </div>
        </section>
    );
}
