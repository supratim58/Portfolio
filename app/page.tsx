import Link from "next/link"
import { Mail, MapPin, Phone, Github, Linkedin, Download, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted transition-colors duration-500">
      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
        {/* Header Section - Redesigned with more visual interest */}
        <header className="mb-16 relative">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-1 shadow-xl">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img src="/mimg.jpg?height=160&width=160" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Supratim Haldar
              </h1>
              <h2 className="text-xl text-muted-foreground mt-2">Cyber Security Analyst</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  West Bangal, India
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-1" />
                  <Link href="mailto:supratim.bankura@gmail.com" className="hover:text-primary transition-colors">
                    supratim.bankura@gmail.com
                  </Link>
                </div>
                {/* <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-1" />
                  <Link href="tel:+15551234567" className="hover:text-primary transition-colors">
                    9733676386
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            <Link href="https://github.com/supratim58" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/supratim-haldar/" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/12YvUaakUDE4LGsEGGNIQKdNRTp9X7e6q/view?usp=sharing" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </Link>
          </div>

          {/* Decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-12" />
        </header>

        {/* About Section - More visually interesting */}
        <section className="mb-20 relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-full transform transition-all duration-300 group-hover:scale-y-110" />
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About Me</span>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent ml-4" />
          </h2>
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300">
            <p className="text-card-foreground leading-relaxed">
              I’m Supratim Haldar, a final-year B.Tech Computer Science & Engineering student at Ramkrishna Mahato Government Engineering College, Purulia,
              with a strong focus on cybersecurity and threat analysis. I’ve tackled EDR challenges using LetsDefend and TryHackMe,
              conducted advanced malicious network-traffic investigations to uncover C2 activity and phishing URLs,
              and built a Python-based CLI malware detector leveraging YARA rules and macro analysis. Proficient in Python, Java, C/C++,
              and tools like Splunk, Wireshark, Sysmon, Snort, and YARA on both Linux and Windows environments,
              I’m eager to apply my skills in a hands-on cybersecurity role.
            </p>
          </div>
        </section>

        {/* Skills Section - Redesigned with more visual interest */}
        <section className="mb-20 relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-secondary/50 to-primary/50 rounded-full transform transition-all duration-300 group-hover:scale-y-110" />
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Skills</span>
            <div className="h-px flex-grow bg-gradient-to-r from-secondary/20 to-transparent ml-4" />
          </h2>
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-secondary/20 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <span className="text-primary font-bold">F</span>
                  </div>
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SOC analyst",
                    "Network Monitoring",
                    "Malware Analysis",
                    "Incident Response",
                    "IDS/IPS",
                    "Networking",
                    "Operating Systems",
                    "Computer Forensics",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-2">
                    <span className="text-secondary font-bold">T</span>
                  </div>
                  Tools & Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Git",
                    "Splunk",
                    "Wireshark",
                    "Sysmon",
                    "Snort",
                    "YARA",
                    "Python",
                    "Java",
                    "C/C++",
                    "HTML/CSS",
                    "JavaScript",
                    "SQL",
                    "Bash",
                    "Linux",
                    "Windows"
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/20 hover:border-secondary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Tabs - Redesigned */}
        <section className="mb-20 relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-full transform transition-all duration-300 group-hover:scale-y-110" />
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent ml-4" />
          </h2>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-full">
              <TabsTrigger
                value="experience"
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="space-y-6">
              {[
                {
                  title: "Endpoint Detection & Response (EDR) and Incident Management",
                  company: "Self Project",
                  achievements: [
                    "Tracked threats via LetsDefend & TryHackMe.",
                    "Isolated systems to contain breaches.",
                    "Refined detections for proactive defense."
                  ],
                },
                {
                  title: "Malicious Network Traffic Analysis",
                  company: "Self Project",
                  achievements: [
                    "Detected C2 activity through network traffic inspection.",
                    "Discovered and tracked phishing URLs for rapid response.",
                    "Used Wireshark for packet capture and analysis.",
                  ],
                },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 group/card"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300" />
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                            <p className="text-muted-foreground">{job.company}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 mt-3">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                              <span className="text-card-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              {[
                {
                  degree: "Bachelor of Technology in Computer Science",
                  school: "Ramkrishna Mahato Government Engineering College, Purulia",
                  period: "2022 - 2026",
                  details: "Pursuing a B.Tech degree with a focus on cybersecurity and threat analysis.",
                },
                {
                  degree: "Higher Secondary in Science",
                  school: "Bankura Christian Collegiate School",
                  period: "2019 - 2021",
                },
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 hover:border-secondary/20 transition-all duration-300 group/card"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-primary transform origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-300" />
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                            <p className="text-muted-foreground">{edu.school}</p>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1 md:mt-0 md:bg-muted/30 md:px-3 md:py-1 md:rounded-full">
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-card-foreground mt-3">{edu.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section - Redesigned with more visual interest */}
        <section className="mb-20 relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-secondary/50 to-primary/50 rounded-full transform transition-all duration-300 group-hover:scale-y-110" />
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-secondary/20 to-transparent ml-4" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Malicious File Detector",
                description:
                  "A CLI tool to detect malware in files using YARA rules and macro analysis.",
                tags: ["Python", "YARA", "Malware Analysis"],
                image: "/MFD.png?height=240&width=480",
                demo: "",
                code: "https://github.com/supratim58/Malicious_File_Detector",
              },
              {
                title: "BANK-CUSTOMER-CHURN-MODEL",
                description:
                  "A machine learning model to predict customer churn in banking using Python and Scikit-learn.",
                tags: ["Python", "Machine Learning", "Scikit-learn"],
                image: "/BCCM.png?height=240&width=480",
                demo: "",
                code: "https://github.com/supratim58/BANK-CUSTOMER-CHURN-MODEL",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group/project border-border/50 hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-0 group-hover/project:opacity-50 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover/project:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl -mt-6 -mr-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-2 relative z-10">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 relative z-10">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 relative z-10">
                    {project.demo ? <Link href={project.demo} target="_blank">
                      <Button size="sm" variant="default" className="gap-2 rounded-full">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </Link> : null}
                    <Link href={project.code} target="_blank">
                      <Button size="sm" variant="outline" className="gap-2 rounded-full">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section - Redesigned */}
        <section className="mb-20 relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary/50 to-secondary/50 rounded-full transform transition-all duration-300 group-hover:scale-y-110" />
          <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent ml-4" />
          </h2>

          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />

            <p className="text-card-foreground mb-8 relative z-10">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              <Link href="mailto:supratim.bankura@gmail.com">
                <Button
                  variant="default"
                  className="w-full gap-2 rounded-full bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary/90 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/supratim-haldar-a4b4972a0/" target="_blank">
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/supratim58" target="_blank">
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Follow on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm py-6">
          <p>© {new Date().getFullYear()} Supratim. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
