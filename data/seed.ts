import { faker } from "@faker-js/faker";

const user = () => {
  return Array.from({ length: 1 }).map((_, index) => ({
    email: "sarliram.me@gmail.com",
    name: "sarliram",
  }));
};

const meta = (count = 1) => {
  return Array.from({ length: 1 }).map((_, index) => ({
    id: index + 1,
    name: "Sar Li Ram",
    profession: "Software Engineer",
    bio: "I have a passion for software. I enjoy creating tools that make life easier for people.",
    quoteTitle: "Please do not measure your skills in percentages!",
    quoteDescription:
      "In my many years of experience, I use @laravel for backend projects and @vuejs forfront-end projects. I’m an avid programmer, so I create designs based on the weekend @figmadesign.",
    footerDescription:
      "I’m not currently taking on new client work but feel free to contact me for any other inquiries.",
    linkedInUrl: "https://www.linkedin.com/in/sar-li-ram-3a1836220/",
    githubUrl: "https://github.com/sarliram",
  }));
};

const project = (count = 1) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(1),
    link: faker.internet.url(),
  }));
};

const education = (count = 1) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    title: faker.lorem.words(3),
    startDate: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    endDate: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    description: faker.lorem.paragraph(1),
    location: faker.internet.url(),
  }));
};

const experience = (count = 1) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    company: faker.lorem.words(1),
    position: faker.helpers.arrayElement([
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
    ]),
    startDate: faker.date.between({ from: "2000-01-01", to: Date.now() }),
    endDate: faker.date.between({ from: "2000-01-01", to: Date.now() }),
  }));
};

const testimonial = (count = 1) => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    name: faker.lorem.words(1),
    company: faker.lorem.words(1),
    position: faker.helpers.arrayElement(["CEO", "CTO", "COO", "DIRECTOR"]),
    message: faker.lorem.paragraph(1),
  }));
};

export { user, meta, project, experience, education, testimonial };
