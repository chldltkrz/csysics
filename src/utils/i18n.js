export const translations = {
    en: {
        hero: {
            subtitle: "Computing Service",
        },
        about: {
            title: "The Fusion",
            cs: {
                title: "Computer Science",
                desc: "The language of the artificial. Algorithms, data structures, and the logic that drives the digital world. We build robust systems that scale."
            },
            physics: {
                title: "Physics",
                desc: "The language of the natural. Forces, energy, and the laws that govern the physical universe. We apply first principles to solve complex problems."
            },
            csysics: {
                title: "CSYSICS",
                desc: "The synthesis. Where code simulates reality, and physical laws inspire algorithms. We create technology that feels natural, powerful, and fundamental."
            }
        },
        philosophy: {
            title: "Our Philosophy",
            quote: "\"we do not just write code; we simulate possibilities.\"",
            desc: "In a world increasingly driven by digital complexity, we return to the elegance of physical laws. Our approach reduces noise, focuses on signal, and builds solutions that are as inevitable as gravity."
        },
        services: {
            title: "Our Services",
            app: {
                title: "Digital Experience Engineering",
                desc: "Crafting seamless user interfaces that flow with the precision of fluid dynamics. We build intuitive, high-performance mobile applications that connect users to your digital universe."
            },
            cloud: {
                title: "Cloud Infrastructure Architecture",
                desc: "Building scalable, nebulous networks that expand infinitely. We design distributed cloud systems that process data with the efficiency of thermodynamic equilibrium."
            },
            server: {
                title: "High-Performance Backend",
                desc: "The gravitational core of your digital service. We engineer robust server architectures that maintain stability and performance under the immense pressure of massive traffic."
            }
        },
        footer: {
            tagline: "Computing the Universe.",
            contactInfo: "Contact Info",
            companyInfo: "Company Info",
            ceo: "Representative: Choi Issac (최이삭)",
            address: "Address: Yeonnamro-3gil 28-12 102Ho, Mapo-gu, Seoul, Republic of Korea (03988)",
            rights: "© 2026 CSYSICS. All rights reserved."
        }
    },
    ko: {
        hero: {
            subtitle: "컴퓨팅 서비스",
        },
        about: {
            title: "융합의 정점",
            cs: {
                title: "컴퓨터 과학",
                desc: "디지털 세상을 설계하는 논리이자 언어. 우리는 알고리즘과 데이터 구조를 통해 견고하고 확장 가능한 시스템을 구축합니다."
            },
            physics: {
                title: "물리학",
                desc: "자연계의 근본 원리. 힘과 에너지, 우주를 지배하는 법칙을 탐구하여 복잡한 문제의 본질적인 해답을 찾습니다."
            },
            csysics: {
                title: "CSYSICS",
                desc: "두 세계의 결합. 코드로 현실을 시뮬레이션하고, 물리 법칙에서 알고리즘의 영감을 얻습니다. 우리는 자연스럽고 강력하며, 본질에 충실한 기술을 창조합니다."
            }
        },
        philosophy: {
            title: "우리의 철학",
            quote: "\"우리는 코드를 넘어, 가능성을 시뮬레이션합니다.\"",
            desc: "복잡함이 지배하는 디지털 세상에서, 우리는 물리 법칙의 우아한 단순함에 주목합니다. 불필요한 소음을 걷어내고 본질에 집중하며, 중력처럼 거부할 수 없는 필연적인 솔루션을 제시합니다."
        },
        services: {
            title: "제공 서비스",
            app: {
                title: "디지털 경험 공학 (App)",
                desc: "유체처럼 매끄럽게 흐르는 사용자 경험을 설계합니다. 사용자와 디지털 세계를 직관적으로 연결하는 고성능 모바일 애플리케이션을 구현합니다."
            },
            cloud: {
                title: "클라우드 인프라 아키텍처 (Cloud)",
                desc: "무한히 팽창하는 우주처럼 유연한 네트워크를 구축합니다. 열역학적 효율성을 바탕으로 데이터를 처리하는 최적의 분산형 클라우드 시스템을 설계합니다."
            },
            server: {
                title: "고성능 백엔드 (Server)",
                desc: "서비스의 중심핵(Core)을 담당합니다. 폭발적인 트래픽 부하 속에서도 흔들리지 않는 안정성과 강력한 성능을 갖춘 서버 아키텍처를 엔지니어링합니다."
            }
        },
        footer: {
            tagline: "우주를 계산하다.",
            contactInfo: "연락처",
            companyInfo: "회사 정보",
            ceo: "대표: 최이삭",
            address: "주소: 서울특별시 마포구 연남로3길 28-12 102호 (03988)",
            rights: "© 2026 CSYSICS. All rights reserved."
        }
    }
};

export const getTranslation = (lang) => translations[lang] || translations['en'];
