import ServiceCard  from "./servicecard";
import "./services.css";

function Services() {
    return (
        <section className="services-section">
            <h1>Explore Our Services</h1>

            <div className="services-grid">
                <ServiceCard
                    title = "Entrance Mock Test"
                    tags = {["NEET", "JEE Main", "KEAM"]}
                    description= "Prepare for competitive entrance exams with full-length mock tests for NEET, KEAM, and JEE Main. Experience real exam conditions with a live timer, auto-submission, detailed performance analysis, and accuracy-based insights to track your progress."
                    accessLabel="Students only"
                    accessType="students"
                    buttonText="Explore"                
                />

                <ServiceCard
                    title = "Question Paper Generator"
                    tags = {["CBSE", "ICSE"]}
                    description= "Create customized question papers for school students based on board, class, and subject. Generate practice papers and unit tests aligned with the school curriculum to help students strengthen concepts and improve exam readiness."

                    accessLabel="All Users"
                    accessType="all"
                    buttonText="Explore"                
                />

                <ServiceCard
                    title = "USMLE Mock Test"
                    tags = {[]}
                    description= "Comprehensive USMLE preparation support covering Step 1, Step 2 CK, and Step 3 with structured guidance, mock exams, analytics, and exam-oriented insights."

                    accessLabel="Students Only"
                    accessType="students"
                    comingSoon={true}                
                />

                <ServiceCard
                    title = "Mark Predictor"
                    tags = {[]}
                    description= "Comprehensive USMLE preparation support covering Step 1, Step 2 CK, and Step 3 with structured guidance, mock exams, analytics, and exam-oriented insights."
                    accessLabel="All Users"
                    accessType="all"
                    comingSoon={true}                
                />

            </div>
        </section>

    );
}

export default Services