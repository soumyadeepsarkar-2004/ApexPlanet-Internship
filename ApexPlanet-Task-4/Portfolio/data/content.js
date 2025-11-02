// Portfolio content data
export const detailsData = {
    experience: {
        ambassador: {
            title: "Campus Ambassador",
            subtitle: "Repository | July 2025 - Present",
            content: `
                <p>As a Campus Ambassador, I actively promote Web3 developer tools within my university community. My role involves organizing workshops, mentoring fellow students, and fostering a collaborative environment for learning about decentralized technologies.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Key Responsibilities:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Hosting technical sessions on blockchain fundamentals and dApp development.</li>
                    <li>Guiding students through documentation and helping them onboard to new platforms.</li>
                    <li>Building and managing a local community of aspiring Web3 developers.</li>
                    <li>Acting as a liaison between the student body and the Repository team.</li>
                </ul>
            `,
            tags: ["Community Building", "Mentorship", "Web3", "Developer Relations"]
        },
        aptosHackathon: {
            title: "Hackathon Participant",
            subtitle: "Build on Aptos Kolkata | July 2025",
            content: `
                <p>This hackathon was an intense and rewarding experience focused on the Aptos blockchain. Our team developed 'Inbox3', a fully decentralized and encrypted chat application from scratch. We utilized the Move programming language for the smart contracts to ensure security and performance.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Achievements:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Successfully built and deployed a functional dApp on the Aptos testnet.</li>
                    <li>Engineered an encryption layer for private messaging between users.</li>
                    <li>Integrated the Petra Wallet for seamless user authentication and transaction signing.</li>
                    <li>Utilized Web3.Storage and Pinata for decentralized off-chain data management.</li>
                </ul>
            `,
            tags: ["Aptos", "Move", "Hackathon", "React", "Cryptography"]
        },
        educhain: {
            title: "Blockchain Enthusiast, Top 5",
            subtitle: "EduChain S3 Kolkata Region | Feb 2025",
            content: `
                <p>In the EduChain S3 competition, my project was recognized as one of the top 5 in the Kolkata region. I developed a decentralized course-booking platform on the Ethereum blockchain. The platform allowed instructors to list courses and students to enroll using cryptocurrency.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Technical Implementation:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Wrote and deployed course-booking smart contracts using Solidity on the Ethereum Sepolia testnet.</li>
                    <li>Built a user-friendly frontend with React, enabling dynamic content locking based on NFT ownership or token payment.</li>
                    <li>Integrated MetaMask for wallet connectivity, allowing for smooth user onboarding and transactions.</li>
                    <li>Used IPFS via Web3.Storage for decentralized hosting of course materials, ensuring censorship resistance.</li>
                </ul>
            `,
            tags: ["Ethereum", "Solidity", "IPFS", "React", "MetaMask", "Top 5"]
        },
        ieeeHackathon: {
            title: "Hackathon Participant",
            subtitle: "IEEE JU Hackathon Double-Slash 3.0 | Feb 2025",
            content: `
                <p>During this 24-hour hackathon, our team created 'Bus Finder', a real-time bus tracking web application. The primary goal was to provide commuters with live updates on bus locations to reduce waiting times and improve transit efficiency.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Key Features:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Collaborated in a high-pressure, 24-hour sprint to build a functional prototype.</li>
                    <li>Utilized Firebase Realtime Database to stream live location data from buses to the user interface.</li>
                    <li>Integrated the Google Maps API to visualize bus routes and live locations on an interactive map.</li>
                    <li>Developed a responsive and intuitive frontend with React and Tailwind CSS, optimized for mobile access.</li>
                    <li>Successfully presented a working demo to a panel of judges at the conclusion of the event.</li>
                </ul>
            `,
            tags: ["React", "Firebase", "Google Maps API", "Hackathon", "Teamwork"]
        }
    },
    project: {
        subscriptionDapp: {
            title: "Subscription dApp with Core DAO",
            subtitle: "A Decentralized Solution for Recurring Payments | May 2025",
            content: `
                <p>This project addresses the challenge of handling recurring payments in a decentralized manner. I developed a set of smart contracts on the Core DAO blockchain that allows users to subscribe to services using their crypto wallets, and service providers to manage these subscriptions securely.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Core Functionality:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Smart contracts written in Solidity to manage subscription tiers, payment cycles, and user status.</li>
                    <li>Integration with MetaMask for wallet-based authentication, replacing traditional email/password logins.</li>
                    <li>Functions for users to subscribe, unsubscribe, and check their subscription status.</li>
                    <li>Owner-only functions for service providers to withdraw funds and manage service offerings.</li>
                </ul>
            `,
            tags: ["Core DAO", "Solidity", "MetaMask", "Smart Contracts", "DeFi"]
        },
        inbox3: {
            title: "Inbox3: Decentralized Messaging on Aptos",
            subtitle: "An Encrypted, Peer-to-Peer Chat Application | July 2025",
            content: `
                <p>Born out of the 'Build on Aptos' hackathon, Inbox3 is a messaging dApp that prioritizes user privacy and data sovereignty. It leverages the high-throughput capabilities of the Aptos blockchain and the Move language's security features to deliver a secure chat experience.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Technical Architecture:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>On-chain logic built with Aptos Move for managing user identities and message pointers.</li>
                    <li>End-to-end encryption for all messages, ensuring only the sender and receiver can read the content.</li>
                    <li>Off-chain data, including the encrypted message content, is stored on decentralized networks like IPFS via Web3.Storage and Pinata.</li>
                    <li>A sleek frontend built with React and integrated with the Petra Wallet for a seamless Web3 user experience.</li>
                </ul>
            `,
            tags: ["Aptos", "Move", "IPFS", "Cryptography", "React", "Web3.Storage"]
        },
        busFinder: {
            title: "Bus Finder: Real-Time Transit Web App",
            subtitle: "A Hackathon Project for Smarter Commuting | Feb 2025",
            content: `
                <p>Developed during the IEEE JU Hackathon, Bus Finder is a practical solution to a common urban problem: uncertain bus arrival times. This web app provides a live map of buses along their routes, allowing users to track their desired bus in real-time.</p>
                <h4 class="text-xl font-bold text-white mt-6 mb-3">Features and Technology:</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Live Tracking:</strong> Uses Firebase Realtime Database to push location updates from a simulated bus GPS to all connected clients instantly.</li>
                    <li><strong>Interactive Map:</strong> Leverages the Google Maps API to display bus routes, stops, and the live, moving location of buses.</li>
                    <li><strong>Responsive UI:</strong> Built with React and Tailwind CSS, the interface is designed to be user-friendly on both desktop and mobile devices.</li>
                    <li><strong>Rapid Prototyping:</strong> The entire functional application was conceived and built within a 24-hour timeframe, showcasing effective teamwork and rapid development skills.</li>
                </ul>
            `,
            tags: ["React", "Firebase", "Google Maps API", "Tailwind CSS", "Hackathon"]
        }
    }
};

// Skills data
export const skills = [
    "Java", "TypeScript", "Solidity", "Python", "React.js", "Node.js",
    "MongoDB", "Tailwind CSS", "Move", "Hardhat", "Ethers.js", "IPFS",
    "Git & GitHub", "Vercel", "Google Cloud"
];





