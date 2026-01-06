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
            title: "융합",
            cs: {
                title: "컴퓨터 과학",
                desc: "인공의 언어. 알고리즘, 자료구조, 그리고 디지털 세상을 움직이는 논리. 우리는 확장 가능한 견고한 시스템을 구축합니다."
            },
            physics: {
                title: "물리학",
                desc: "자연의 언어. 힘, 에너지, 그리고 물리적 우주를 지배하는 법칙. 우리는 제1원칙을 적용하여 복잡한 문제를 해결합니다."
            },
            csysics: {
                title: "CSYSICS",
                desc: "종합. 코드가 현실을 시뮬레이션하고, 물리 법칙이 알고리즘에 영감을 주는 곳. 우리는 자연스럽고 강력하며 근원적인 기술을 창조합니다."
            }
        },
        philosophy: {
            title: "우리의 철학",
            quote: "\"우리는 코드를 작성하는 것이 아니라, 가능성을 시뮬레이션합니다.\"",
            desc: "점점 더 복잡해지는 디지털 세상에서, 우리는 물리 법칙의 우아함으로 돌아갑니다. 우리의 접근 방식은 소음을 줄이고 신호에 집중하며, 중력처럼 필연적인 솔루션을 만듭니다."
        },
        services: {
            title: "서비스",
            app: {
                title: "디지털 경험 공학 (App)",
                desc: "유체 역학의 정밀함으로 흐르는 매끄러운 사용자 인터페이스를 제작합니다. 사용자와 디지털 우주를 연결하는 직관적이고 고성능의 모바일 애플리케이션을 구축합니다."
            },
            cloud: {
                title: "클라우드 인프라 아키텍처 (Cloud)",
                desc: "무한히 확장되는 성운과 같은 네트워크를 구축합니다. 열역학적 평형의 효율성으로 데이터를 처리하는 분산형 클라우드 시스템을 설계합니다."
            },
            server: {
                title: "고성능 백엔드 (Server)",
                desc: "디지털 서비스의 중력 중심입니다. 대규모 트래픽의 엄청난 압력 하에서도 안정성과 성능을 유지하는 견고한 서버 아키텍처를 엔지니어링합니다."
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
