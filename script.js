(() => {
  'use strict';

  const titleCaseAcronyms = new Set('MBA NIMS NAAC UGC QS FTU USA US OTP MNC MNCs AI HR IT HHM SAP KPMG EY OM B2B ABHA LPA MIS CAT MAT ABDC NSS CARE NPTEL IEEE BOLT CEO HRD CEGR MSME APAC DTORR'.split(' '));
  function titleCaseLabel(value) {
    return String(value).replace(/[A-Za-z]+(?:[’'][A-Za-z]+)?(?:\.[A-Za-z]+)*\.?/g, word => {
      const period = word.endsWith('.') ? '.' : '';
      const stem = period ? word.slice(0, -1) : word;
      if (titleCaseAcronyms.has(stem) || stem.includes('.') || (stem.length === 1 && stem === stem.toUpperCase())) return word;
      return stem[0].toUpperCase() + (stem === stem.toUpperCase() ? stem.slice(1).toLowerCase() : stem.slice(1)) + period;
    });
  }

  // Shared motion preference and admissions configuration.
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  window.NIMS_CONFIG = { applicationEndpoint: '', videos: {}, ...window.NIMS_CONFIG };

  // Faculty profile content.
  const facultyProfiles = [
  {
    "id": "meena-yadav",
    "name": "Prof. (Dr.) Meena K Yadav",
    "role": "Director-cum-Principal",
    "qualification": "M.Pharm, Ph.D. in Pharmaceutical Sciences",
    "specialisation": "Pharmaceutics & Academic Leadership",
    "experience": "20+ years",
    "metrics": [
      {
        "label": "Publications",
        "value": "45+"
      },
      {
        "label": "Research Citations",
        "value": "500+"
      }
    ],
    "achievement": "Participant in prestigious Capsule Batch-II Leadership Program (PCI New Delhi); APTI Education Excellence Award.",
    "research": "Advanced Drug Delivery Systems, Novel Formulations, and Academic Leadership in Pharmaceutical Education.",
    "joined": "1 Nov 2018",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/rashmi-uikey.webp",
    "sourceRow": 4,
    "generated": false
  },
  {
    "id": "dr-deepak-nathiya",
    "name": "Dr. Deepak Nathiya",
    "role": "Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmacy Practice & Clinical Pharmacokinetics",
    "experience": "16+ years",
    "metrics": [
      {
        "label": "Research Papers",
        "value": "35+"
      },
      {
        "label": "APTI Recognition",
        "value": "Fellow 2025"
      }
    ],
    "achievement": "Honoured with APTI Fellowship Award at 74th Indian Pharmaceutical Congress in Bengaluru.",
    "research": "Clinical Pharmacokinetics, Pharmacovigilance, Drug Utilization Review, and Hospital Pharmacy Practice.",
    "joined": "3 Sep 2015",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/dr-reena-roy.webp",
    "sourceRow": 5,
    "generated": false
  },
  {
    "id": "dr-dharmendra-khatri",
    "name": "Dr. Dharmendra Khatri",
    "role": "Associate Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmaceutical Chemistry & Drug Discovery",
    "experience": "12+ years",
    "metrics": [
      {
        "label": "Stanford Top 2%",
        "value": "World Scientist"
      },
      {
        "label": "Publications",
        "value": "30+"
      }
    ],
    "achievement": "Listed among the world's top 2% of scientists in the Stanford University list (2025).",
    "research": "Computer-Aided Drug Design (CADD), Synthesis of Novel Heterocyclic Bioactive Compounds.",
    "joined": "10 Aug 2019",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/dr-anjali-chaudhary.webp",
    "sourceRow": 6,
    "generated": false
  },
  {
    "id": "dr-ravindra-pal-singh",
    "name": "Dr. Ravindra Pal Singh",
    "role": "Associate Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmaceutics & Nanotechnology",
    "experience": "14+ years",
    "metrics": [
      {
        "label": "SciRank Global",
        "value": "Top 5%"
      },
      {
        "label": "Publications",
        "value": "28+"
      }
    ],
    "achievement": "Listed among top 5% of scientists in the SciRank Global Database (2026).",
    "research": "Targeted Nanoparticulate Drug Delivery Systems, Controlled Release Dosage Forms.",
    "joined": "15 Jan 2018",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/dr-priyanka-gupta.webp",
    "sourceRow": 7,
    "generated": false
  },
  {
    "id": "dr-parveen-kumar",
    "name": "Dr. Parveen Kumar",
    "role": "Associate Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmacology & Experimental Therapeutics",
    "experience": "12+ years",
    "metrics": [
      {
        "label": "SciRank Global",
        "value": "Top 5%"
      },
      {
        "label": "Publications",
        "value": "25+"
      }
    ],
    "achievement": "Listed among top 5% of scientists in the SciRank Global Database (2026).",
    "research": "Neuropharmacology, Metabolic Disorders, and Preclinical Safety Evaluation.",
    "joined": "12 Jun 2019",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/manish-kumar-singh.webp",
    "sourceRow": 8,
    "generated": false
  },
  {
    "id": "dr-anurag-mishra",
    "name": "Dr. Anurag Mishra",
    "role": "Associate Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmacognosy & Phytochemistry",
    "experience": "14+ years",
    "metrics": [
      {
        "label": "SciRank Global",
        "value": "Top 5%"
      },
      {
        "label": "Publications",
        "value": "26+"
      }
    ],
    "achievement": "Listed among top 5% of scientists in the SciRank Global Database (2026).",
    "research": "Standardization of Herbal Formulations, Isolation of Bioactive Phytoconstituents.",
    "joined": "1 Feb 2017",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/akhand=pratap-singh.webp",
    "sourceRow": 9,
    "generated": false
  },
  {
    "id": "dr-junaid-tantray",
    "name": "Dr. Junaid Tantray",
    "role": "Associate Professor",
    "qualification": "M.Pharm, Ph.D.",
    "specialisation": "Pharmaceutical Biotechnology & Regulatory Affairs",
    "experience": "10+ years",
    "metrics": [
      {
        "label": "Publications",
        "value": "20+"
      },
      {
        "label": "Award Co-recipient",
        "value": "APTI 2025"
      }
    ],
    "achievement": "Co-recipient of the APTI Education Excellence Award at 74th IPC Bengaluru on behalf of NIMS University.",
    "research": "Microbial Fermentation, Biopharmaceuticals, Quality by Design (QbD).",
    "joined": "20 Jul 2020",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/ashu-sharma.webp",
    "sourceRow": 10,
    "generated": false
  },
  {
    "id": "nikhil-khandale",
    "name": "Mr. Nikhil Bhimsing Khandale",
    "role": "Assistant Professor",
    "qualification": "M.Pharm (Pharmaceutical Chemistry), Ph.D. (Pursuing)",
    "specialisation": "Pharmaceutical Chemistry & Biomedical Devices",
    "experience": "6+ years",
    "metrics": [
      {
        "label": "SPARC Workshop",
        "value": "BDDH-2026"
      },
      {
        "label": "Publications",
        "value": "12+"
      }
    ],
    "achievement": "Selected & completed the 5-day International Workshop on Biomedical Devices for Defence & Healthcare (BDDH-2026) at SVNIT Surat with Univ. of Strathclyde, Glasgow UK.",
    "research": "Medicinal Chemistry, Heterocyclic Synthesis, and Healthcare Diagnostic Devices.",
    "joined": "10 Oct 2021",
    "appointment": "Permanent",
    "department": "NIMS Institute of Pharmacy",
    "portrait": "images/balaram-yadav.webp",
    "sourceRow": 11,
    "generated": false
  }
];



  // Application Form.
  function initResponsiveApplicationSection() {
    const panel = document.querySelector('#apply');
    const desktopRegion = document.querySelector('.hero-application-region');
    const mobileSection = document.querySelector('#mobile-application');
    if (!panel || !desktopRegion || !mobileSection) return;
    const mobile = window.matchMedia('(max-width: 899px)');
    const update = () => {
      (mobile.matches ? mobileSection : desktopRegion).append(panel);
      mobileSection.hidden = !mobile.matches;
    };
    mobile.addEventListener('change', update);
    update();
  }

  function initApplicationForm() {
    const form = document.querySelector('#application-form');
    const state = document.querySelector('#state');
    const city = document.querySelector('#city');
    if (!form || !state || !city) return;
    const status = document.querySelector('#form-status');
    const summary = document.querySelector('.form-error-summary');
    const config = window.NIMS_CONFIG || {};
    const states = {
      'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
      'Arunachal Pradesh': ['Itanagar'],
      'Assam': ['Guwahati', 'Dibrugarh'],
      'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
      'Chhattisgarh': ['Raipur', 'Bilaspur'],
      'Goa': ['Panaji', 'Margao'],
      'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
      'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Hisar'],
      'Himachal Pradesh': ['Shimla', 'Dharamshala'],
      'Jharkhand': ['Ranchi', 'Jamshedpur'],
      'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru'],
      'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
      'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur'],
      'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
      'Manipur': ['Imphal'],
      'Meghalaya': ['Shillong'],
      'Mizoram': ['Aizawl'],
      'Nagaland': ['Kohima', 'Dimapur'],
      'Odisha': ['Bhubaneswar', 'Cuttack'],
      'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'],
      'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar'],
      'Sikkim': ['Gangtok'],
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
      'Telangana': ['Hyderabad', 'Warangal'],
      'Tripura': ['Agartala'],
      'Uttar Pradesh': ['Lucknow', 'Noida', 'Ghaziabad', 'Kanpur', 'Agra', 'Varanasi'],
      'Uttarakhand': ['Dehradun', 'Haridwar'],
      'West Bengal': ['Kolkata', 'Siliguri'],
      'Andaman and Nicobar Islands': ['Port Blair'],
      'Chandigarh': ['Chandigarh'],
      'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Silvassa'],
      'Delhi': ['New Delhi', 'Delhi'],
      'Jammu and Kashmir': ['Jammu', 'Srinagar'],
      'Ladakh': ['Leh', 'Kargil'],
      'Lakshadweep': ['Kavaratti'],
      'Puducherry': ['Puducherry']
    };
    Object.keys(states).sort().forEach(name => state.add(new Option(titleCaseLabel(name), name)));
    state.addEventListener('change', () => {
      city.replaceChildren(new Option('Select City *', ''));
      (states[state.value] || []).concat(state.value ? ['Other city'] : []).forEach(name => city.add(new Option(titleCaseLabel(name),
        name)));
      city.disabled = !state.value;
    });
    document.querySelectorAll('[data-programme]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('#discipline').value = 'Pharmacy';
        document.querySelector('#programme').value = button.dataset.programme;
        document.querySelector('#apply').scrollIntoView({
          behavior: motionPreference.matches ? 'instant' : 'smooth',
          block: 'center'
        });
        document.querySelector('#student-name').focus({
          preventScroll: true
        });
      });
    });
    form.addEventListener('input', event => {
      if (event.target.matches('input,select')) event.target.removeAttribute('aria-invalid');
      if (status.hidden === false) status.hidden = true;
    });
    form.addEventListener('submit', async event => {
      event.preventDefault();
      summary.hidden = true;
      status.hidden = true;
      form.classList.add('was-validated');
      const invalid = Array.from(form.elements).filter(el => el.willValidate && !el.checkValidity());
      invalid.forEach(el => el.setAttribute('aria-invalid', 'true'));
      if (invalid.length) {
        summary.replaceChildren();
        const intro = document.createElement('p');
        intro.className = 'mb-1';
        intro.textContent = 'Please check the highlighted fields.';
        summary.append(intro);
        const list = document.createElement('ul');
        invalid.forEach(el => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#' + el.id;
          a.textContent = el.parentElement.querySelector('.invalid-feedback')?.textContent ||
            'Complete this field';
          a.addEventListener('click', ev => {
            ev.preventDefault();
            el.focus();
          });
          li.append(a);
          list.append(li);
        });
        summary.append(list);
        summary.hidden = false;
        summary.focus();
        return;
      }
      const details = Object.fromEntries(new FormData(form));
      const submit = form.querySelector('[type="submit"]');
      if (config.applicationEndpoint) {
        submit.disabled = true;
        submit.textContent = 'Sending…';
        try {
          const response = await fetch(config.applicationEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
          });
          if (!response.ok) throw new Error('Request failed');
          status.textContent = 'Your details have been sent. The admissions team will contact you.';
        } catch (_) {
          status.textContent = 'Your details could not be sent. Please try again or call +91 9240038097.';
        } finally {
          submit.disabled = false;
          submit.textContent = 'Apply Now';
        }
      } else {
        status.replaceChildren();
        const message = document.createElement('p');
        message.textContent = 'Your details are ready. Call admissions to complete your application.';
        message.className = 'mb-2';
        const call = document.createElement('a');
        call.href = 'tel:+919240038097';
        call.textContent = 'Call +91 9240038097';
        const save = document.createElement('button');
        save.type = 'button';
        save.className = 'btn btn-sm btn-outline-success d-block mt-2';
        save.textContent = 'Save My Application Details';
        save.addEventListener('click', () => {
          const text = 'NIMS University — Application details\n\n' + Object.entries(details).map(([k, v]) => k +
            ': ' + v).join('\n') +
            '\n\nContact admissions: +91 9240038097\nThis summary has not been submitted to the university.';
          const url = URL.createObjectURL(new Blob([text], {
            type: 'text/plain;charset=utf-8'
          }));
          const link = document.createElement('a');
          link.href = url;
          link.download = 'nims-application-details.txt';
          link.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        });
        status.append(message, call, save);
      }
      status.hidden = false;
      status.focus();
    });
  }

  // Video Dialog.
  function initVideoDialog() {
    const config = window.NIMS_CONFIG || {};
    const modalElement = document.querySelector('#story-modal');
    if (!modalElement || typeof bootstrap === 'undefined' || !bootstrap.Modal) return;
    const modal = new bootstrap.Modal(modalElement);
    const media = document.querySelector('#story-media');
    let storyTrigger;
    const youtubeId = url => {
      try {
        const parsed = new URL(url, location.href);
        const host = parsed.hostname.toLowerCase();
        const id = host === 'youtu.be' ? parsed.pathname.slice(1) : ['youtube.com', 'www.youtube.com', 'm.youtube.com']
          .includes(host) ? parsed.searchParams.get('v') : null;
        return /^[\w-]{11}$/.test(id || '') ? id : null;
      } catch (_) {
        return null;
      }
    };
    const stories = document.querySelector('#stories');
    if (stories) {
      const thumbnailSizes = ['maxresdefault', 'sddefault', 'hqdefault'];
      const setThumbnail = (image, size) => {
        image.dataset.youtubeThumbnailSize = String(size);
        const src = `https://i.ytimg.com/vi/${image.dataset.youtubeId}/${thumbnailSizes[size]}.jpg?v=20261102-1`;
        image.closest('[data-video]').dataset.poster = src;
        if (image.getAttribute('src') !== src) image.src = src;
      };
      const fallback = image => {
        if (!(image instanceof HTMLImageElement) || !image.dataset.youtubeId) return;
        const next = Number(image.dataset.youtubeThumbnailSize) + 1;
        if (next < thumbnailSizes.length) setThumbnail(image, next);
      };
      // Capture image events so the infinite slider's copied cards also recover.
      stories.addEventListener('error', event => fallback(event.target), true);
      stories.addEventListener('load', event => {
        if (event.target instanceof HTMLImageElement && event.target.naturalWidth <= 120) fallback(event.target);
      }, true);
      stories.querySelectorAll('[data-video]').forEach(button => {
        const id = youtubeId(button.dataset.video);
        const image = button.querySelector('img');
        if (!id || !image) return;
        if (button.dataset.fallbackPoster) {
          button.dataset.poster = button.dataset.fallbackPoster;
          image.src = button.dataset.fallbackPoster;
          return;
        }
        image.dataset.youtubeId = id;
        setThumbnail(image, 0);
        if (image.complete && image.naturalWidth <= 120) fallback(image);
      });
    }
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-story]');
      if (!button) return;
      const title = button.dataset.story;
      const url = button.dataset.video || config.videos?.[title];
      const id = youtubeId(url);
      // Some videos are unavailable in embeds; use their original watch page.
      if (id && button.dataset.videoTarget === 'youtube') {
        window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
      storyTrigger = button;
      document.querySelector('#story-modal-title').textContent = titleCaseLabel(title);
      media.replaceChildren();
      if (id) {
        const frame = document.createElement('iframe');
        const start = new URL(url, location.href).searchParams.get('t')?.match(/^(\d+)s?$/)?.[1];
        frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? `&start=${Number(start)}` : ''}`;
        frame.title = title;
        frame.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        media.append(frame);
      } else if (url) {
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';
        video.src = url;
        video.poster = button.dataset.poster;
        media.append(video);
      } else {
        const poster = document.createElement('img');
        poster.src = button.dataset.poster;
        poster.alt = title;
        media.append(poster);
      }
      document.querySelector('#story-caption').textContent = url ? '' : title;
      modal.show(button);
    });
    modalElement.addEventListener('hide.bs.modal', () => media.replaceChildren());
    modalElement.addEventListener('hidden.bs.modal', () => {
      storyTrigger?.focus({
        preventScroll: true
      });
    });
  }

  // Industry Leaders.
  function initLeaderCarousel() {
    const root = document.querySelector('#leaders');
    const track = root?.querySelector('.leader-cards');
    if (!track?.firstElementChild) return;
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal[open], #story-modal.show, #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const slide = direction => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = track.firstElementChild.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      const pageJump = step * visibleCards;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 2) return;
      const pages = [0];
      for (let left = pageJump; left < maxScroll - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maxScroll);
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const next = (current + direction + pages.length) % pages.length;
      track.scrollTo({ left: pages[next], behavior: motionPreference.matches ? 'instant' : 'smooth' });
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked()) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        slide(1);
      }, 5500);
    };

    root.querySelectorAll('[data-leader-direction]').forEach(button => {
      button.addEventListener('click', () => {
        slide(Number(button.dataset.leaderDirection));
        restartTimer();
      });
    });

    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        slide(event.key === 'ArrowRight' ? 1 : -1);
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        track.scrollTo({
          left: event.key === 'Home' ? 0 : track.scrollWidth,
          behavior: motionPreference.matches ? 'instant' : 'smooth'
        });
        restartTimer();
      }
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);
    restartTimer();
  }

  function initLawEngagementShowcase() {
    const root = document.querySelector('.law-engagement-showcase');
    if (!root) return;
    const slides = [...root.querySelectorAll('.law-engagement-slide')];
    const position = root.querySelector('[data-engagement-position]');
    const announcement = root.querySelector('[data-engagement-announcement]');
    let index = 0;
    let pointer = null;
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal[open], #story-modal.show, #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && root.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    function select(next, announce = true) {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-current', i === index);
        slide.setAttribute('aria-hidden', String(i !== index));
        slide.inert = i !== index;
      });
      if (position) position.textContent = `${index + 1} / ${slides.length}`;
      if (announce && announcement) announcement.textContent = slides[index].getAttribute('aria-label');
    }

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || slides.length < 2) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        select(index + 1);
      }, 5500);
    };

    root.querySelectorAll('[data-engagement-direction]').forEach(button => {
      button.addEventListener('click', () => {
        select(index + Number(button.dataset.engagementDirection));
        restartTimer();
      });
    });

    root.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        select(index + (event.key === 'ArrowRight' ? 1 : -1));
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        select(event.key === 'Home' ? 0 : slides.length - 1);
        restartTimer();
      }
    });

    root.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    root.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    root.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    root.addEventListener('focusout', () => {
      focused = root.contains(document.activeElement);
      restartTimer();
    });

    root.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
      if (event.pointerType === 'mouse' || event.target.closest('button')) return;
      pointer = { x: event.clientX, y: event.clientY };
    });
    root.addEventListener('pointerup', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
      if (!pointer) return;
      const dx = event.clientX - pointer.x;
      const dy = event.clientY - pointer.y;
      pointer = null;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.25) {
        select(index + (dx < 0 ? 1 : -1));
        restartTimer();
      }
    });
    root.addEventListener('touchstart', pauseTouch, { passive: true });
    root.addEventListener('touchend', pauseTouch, { passive: true });
    root.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(root);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);
    select(0, false);
    restartTimer();
  }

  function initLawEventDetails() {
    const source = document.querySelector('#law-events-data');
    const dialog = document.querySelector('#law-event-dialog');
    if (!source || !dialog) return;
    const events = new Map(JSON.parse(source.textContent).map(event => [event.id, event]));
    const image = dialog.querySelector('[data-event-image]');
    const frame = dialog.querySelector('.law-event-photo-frame');
    const thumbnails = dialog.querySelector('[data-event-thumbnails]');
    const noPhoto = dialog.querySelector('[data-event-no-photo]');
    const galleryControls = dialog.querySelector('[data-event-gallery-controls]');
    let selected = null;
    let photoIndex = 0;
    let trigger = null;
    const sizePhoto = () => {
      frame.style.setProperty('--event-frame-height', `${frame.clientHeight}px`);
      frame.style.setProperty('--event-frame-width', `${frame.clientWidth}px`);
    };
    new ResizeObserver(sizePhoto).observe(frame);

    function showPhoto(index) {
      if (!selected) return;
      const photos = selected.images;
      image.hidden = !photos.length;
      noPhoto.hidden = photos.length > 0;
      galleryControls.hidden = photos.length < 2;
      thumbnails.hidden = photos.length < 2;
      if (!photos.length) {
        image.removeAttribute('src');
        image.alt = '';
        return;
      }
      photoIndex = (index + photos.length) % photos.length;
      const photo = photos[photoIndex];
      image.src = photo.src;
      image.alt = photo.alt;
      image.classList.toggle('is-rotated', Boolean(photo.rotate));
      dialog.querySelector('[data-event-photo-count]').textContent = `${photoIndex + 1} / ${photos.length}`;
      thumbnails.querySelectorAll('button').forEach((button, i) => {
        button.setAttribute('aria-pressed', String(i === photoIndex));
      });
      sizePhoto();
    }

    document.querySelectorAll('[data-law-event]').forEach(button => {
      button.addEventListener('click', () => {
        selected = events.get(button.dataset.lawEvent);
        if (!selected) return;
        trigger = button;
        dialog.querySelector('#law-event-dialog-title').textContent = selected.title;
        dialog.querySelector('[data-event-type]').textContent = selected.type;
        const date = dialog.querySelector('[data-event-date]');
        date.textContent = selected.date;
        date.hidden = !selected.date;
        dialog.querySelector('[data-event-speaker]').textContent = selected.speaker;
        dialog.querySelector('[data-event-description]').textContent = selected.description;
        dialog.querySelector('[data-event-takeaway]').textContent = selected.significance;
        const areas = dialog.querySelector('[data-event-areas]');
        areas.replaceChildren(...selected.areas.map(text => {
          const item = document.createElement('li');
          item.textContent = text;
          return item;
        }));
        thumbnails.replaceChildren(...selected.images.map((photo, index) => {
          const thumbnail = document.createElement('button');
          thumbnail.type = 'button';
          thumbnail.className = 'law-event-thumbnail';
          thumbnail.setAttribute('aria-label', `Show event photograph ${index + 1}`);
          const preview = document.createElement('img');
          preview.src = photo.src;
          preview.alt = '';
          if (photo.rotate) preview.className = 'is-rotated';
          thumbnail.append(preview);
          thumbnail.addEventListener('click', () => showPhoto(index));
          return thumbnail;
        }));
        showPhoto(0);
        dialog.showModal();
        document.body.classList.add('law-event-modal-open');
        dialog.scrollTop = 0;
        requestAnimationFrame(sizePhoto);
      });
    });
    dialog.querySelector('[data-event-photo-prev]').addEventListener('click', () => showPhoto(photoIndex - 1));
    dialog.querySelector('[data-event-photo-next]').addEventListener('click', () => showPhoto(photoIndex + 1));
    dialog.querySelector('[data-event-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => {
      document.body.classList.remove('law-event-modal-open');
      trigger?.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('keydown', event => {
      if (!selected?.images.length) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
  }

  // Show the floating CTA between the site header and final admissions section.
  function initStickyAdmissionsCTA() {
    const cta = document.querySelector('.sticky-admissions-cta');
    const banner = document.querySelector('#admissions-banner');
    const header = document.querySelector('.site-header');
    if (!cta || !banner) return;
    let frame;
    const update = () => {
      frame = undefined;
      const headerVisible = header && header.getBoundingClientRect().bottom > 0;
      const mobile = window.matchMedia('(max-width: 700px)').matches;
      const hide = !mobile && (headerVisible || banner.getBoundingClientRect().top < window.innerHeight);
      cta.hidden = hide;
      document.body.classList.toggle('sticky-cta-hidden', hide);
    };
    const schedule = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    update();
  }

  // Back To Top.
  function initBackToTop() {
    const topButton = document.querySelector('.back-to-top');
    if (!topButton) return;
    window.addEventListener('scroll', () => {
      topButton.hidden = window.scrollY < 900;
    }, {
      passive: true
    });
    topButton.addEventListener('click', () => window.scrollTo({
      top: 0,
      behavior: motionPreference.matches ? 'instant' : 'smooth'
    }));
  }

  function initSliderAutoplay(root, advance, {viewport = root, enabled = () => true, interval = 2500} = {}) {
    let timer;
    let visible = false;
    let hovered = false;
    let touching = false;
    let resumeAt = 0;
    const blocked = () => !visible || document.hidden || motionPreference.matches || hovered || touching ||
      root.querySelector(':focus-visible') || document.querySelector('dialog[open], .modal.show');
    const schedule = () => {
      clearTimeout(timer);
      if (blocked()) return;
      timer = setTimeout(() => {
        if (!blocked() && enabled() && Date.now() >= resumeAt) advance();
        schedule();
      }, Math.max(interval, resumeAt - Date.now()));
    };
    const manual = () => {
      resumeAt = Date.now() + 3500;
      schedule();
    };
    root.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse') return;
      hovered = true;
      schedule();
    });
    root.addEventListener('pointerleave', () => { hovered = false; schedule(); });
    root.addEventListener('pointerdown', () => { touching = true; manual(); }, {passive: true});
    const release = () => {
      if (!touching) return;
      touching = false;
      manual();
    };
    window.addEventListener('pointerup', release, {passive: true});
    window.addEventListener('pointercancel', release, {passive: true});
    root.addEventListener('click', manual);
    root.addEventListener('wheel', manual, {passive: true});
    root.addEventListener('focusin', schedule);
    root.addEventListener('focusout', () => queueMicrotask(schedule));
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, {threshold: .1}).observe(viewport);
    document.addEventListener('visibilitychange', schedule);
    document.addEventListener('hidden.bs.modal', schedule);
    // Native dialog close events do not bubble.
    document.addEventListener('close', schedule, true);
    motionPreference.addEventListener('change', schedule);
    return manual;
  }

  // Industry Benefits.

  // Industry Benefits.
  function initIndustryBenefits() {
    const root = document.querySelector('#industry');
    if (!root) return;
    const track = root.querySelector('.industry-benefit-cards');
    if (!track?.firstElementChild) return;
    const controls = root.querySelector('.industry-benefit-controls');
    const previous = controls?.querySelector('[data-benefit-previous]');
    const next = controls?.querySelector('[data-benefit-next]');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = track.firstElementChild.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const move = direction => {
      const { pages, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked()) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 5500);
    };

    const update = () => {
      const maximum = track.scrollWidth - track.clientWidth;
      if (controls) {
        controls.hidden = maximum < 2;
      }
      if (previous) previous.disabled = false;
      if (next) next.disabled = false;
    };

    if (previous) {
      previous.addEventListener('click', () => {
        move(-1);
        restartTimer();
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        move(1);
        restartTimer();
      });
    }

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
    restartTimer();
  }

  // Hero And Recognition Panels.
  function initHeroAndRecognition() {
    const preference = motionPreference;
    const cycles = [];
    const paused = () => preference.matches;
    const modalOpen = () => !!document.querySelector('.modal.show');
    const rootClass = document.documentElement;

    function refreshMotion() {
      rootClass.classList.toggle('motion-paused', paused());
      cycles.forEach(c => {
        if (paused()) c.finish();
        c.schedule();
      });
    }
    preference.addEventListener('change', refreshMotion);
    document.addEventListener('visibilitychange', () => cycles.forEach(c => c.schedule()));
    document.addEventListener('shown.bs.modal', () => cycles.forEach(c => c.schedule()));
    document.addEventListener('hidden.bs.modal', () => cycles.forEach(c => c.schedule()));

    function cycle(root, interval, advance, finish = () => { }, pauseOnHover = true) {
      let timer;
      const state = {
        visible: false,
        hovered: false,
        focused: false,
        notBefore: 0
      };
      const blocked = () => paused() || document.hidden || modalOpen() || !state.visible || state.hovered || state
        .focused;

      function schedule() {
        clearTimeout(timer);
        if (blocked()) return;
        timer = setTimeout(async () => {
          if (blocked()) return;
          await advance(1, false);
          schedule();
        }, Math.max(interval, state.notBefore - Date.now()));
      }
      const controller = {
        schedule,
        finish,
        manual(direction) {
          state.notBefore = Date.now() + 2000;
          advance(direction, true);
          schedule();
        }
      };
      root.addEventListener('pointerenter', e => {
        if (e.pointerType !== 'touch' && pauseOnHover) {
          state.hovered = true;
          schedule();
        }
      });
      root.addEventListener('pointerleave', () => {
        state.hovered = false;
        schedule();
      });
      root.addEventListener('focusin', () => {
        state.focused = true;
        schedule();
      });
      root.addEventListener('focusout', () => queueMicrotask(() => {
        state.focused = root.contains(document.activeElement);
        schedule();
      }));
      root.addEventListener('pointerdown', () => {
        state.notBefore = Date.now() + 2000;
        schedule();
      }, {
        passive: true
      });
      new IntersectionObserver(entries => {
        state.visible = entries[0].isIntersecting;
        schedule();
      }, {
        threshold: .08
      }).observe(root);
      cycles.push(controller);
      return controller;
    }

    function announce(root, index, total, label, manual) {
      root.dataset.activeIndex = String(index);
      const count = root.querySelector('.gallery-position');
      if (count) count.textContent = `${index + 1} / ${total}`;
      const live = root.querySelector('.gallery-announcement');
      if (live && manual) live.textContent = `${label}. ${index + 1} of ${total}.`;
    }

    function arrows(root, controller) {
      root.querySelector('.gallery-previous')?.addEventListener('click', () => controller.manual(-1));
      root.querySelector('.gallery-next')?.addEventListener('click', () => controller.manual(1));
    }

    function current(slides, index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-current', i === index);
        slide.setAttribute('aria-hidden', String(i !== index));
        slide.inert = i !== index;
      });
    }
    async function ready(slide) {
      const photo = slide.querySelector('img');
      if (photo && !photo.complete) {
        photo.loading = 'eager';
        try {
          await photo.decode();
        } catch (_) {
          return false;
        }
      }
      return !photo || photo.naturalWidth > 0;
    }
    const hero = document.querySelector('.hero');
    if (hero) {
      const heroInner = hero.querySelector('.hero-inner');
      const heroBenefits = hero.querySelector('.hero-benefits, .college-reference-hero__proofs');
      if (heroInner && heroBenefits) {
        const alignMobilePortrait = () => {
          const base = heroInner.getBoundingClientRect().bottom - heroBenefits.getBoundingClientRect().top;
          hero.style.setProperty('--mobile-portrait-base', `${base}px`);
        };
        const heroLayoutObserver = new ResizeObserver(alignMobilePortrait);
        heroLayoutObserver.observe(heroInner);
        heroLayoutObserver.observe(heroBenefits);
        alignMobilePortrait();
      }
      const portraits = [...hero.querySelectorAll('.portrait-slide')];
      let portraitIndex = 0;
      let portraitRequest = 0;
      if (portraits.length > 1) {
        cycle(hero, 1500, async (direction, manual) => {
          const generation = ++portraitRequest;
          const target = (portraitIndex + direction + portraits.length) % portraits.length;
          if (!await ready(portraits[target]) || generation !== portraitRequest || (!manual && paused())) return;
          portraitIndex = target;
          current(portraits, portraitIndex);
          hero.dataset.activeIndex = String(portraitIndex);
        }, () => { }, false);
        current(portraits, 0);
      }
      hero.dataset.activeIndex = '0';
    }
    const ranking = document.querySelector('.recognition-carousel');
    if (ranking && ranking.querySelector('.recognition-pages')) {
      const rankingTrack = ranking.querySelector('.recognition-pages');
      const panels = [...rankingTrack.children];
      if (panels.length) {
        let panelIndex = 0;
        const sizeRecognitionPanel = () => {
          if (panels[0]) ranking.style.setProperty('--recognition-first-panel-height', `${Math.ceil(panels[0].getBoundingClientRect().height)}px`);
          if (panels[panelIndex]) ranking.style.setProperty('--recognition-panel-height', `${Math.ceil(panels[panelIndex].getBoundingClientRect().height)}px`);
        };
        const recognitionResizeObserver = new ResizeObserver(sizeRecognitionPanel);
        panels.forEach(panel => recognitionResizeObserver.observe(panel));
        sizeRecognitionPanel();
    const rankCycle = cycle(ranking, 5500, (direction, manual) => {
      panelIndex = (panelIndex + direction + panels.length) % panels.length;
      rankingTrack.style.transform = `translateX(-${100 * panelIndex}%)`;
      panels.forEach((panel, i) => {
        panel.inert = i !== panelIndex;
        panel.setAttribute('aria-hidden', String(i !== panelIndex));
      });
      sizeRecognitionPanel();
      announce(ranking, panelIndex, panels.length, panels[panelIndex].dataset.label, manual);
    });
    arrows(ranking, rankCycle);
    announce(ranking, 0, panels.length, panels[0].dataset.label, false);
      }
    }

    function fadeGallery(root, selector, delay) {
      if (!root) return null;
      const slides = [...root.querySelectorAll(selector)];
      let index = 0;
      let request = 0;
      const controller = cycle(root, delay, async (direction, manual) => {
        const generation = ++request;
        const target = (index + direction + slides.length) % slides.length;
        if (!await ready(slides[target]) || generation !== request || (!manual && paused())) return;
        index = target;
        current(slides, index);
        announce(root, index, slides.length, slides[index].dataset.label, manual);
        root.dispatchEvent(new CustomEvent('slidechange', { detail: { index, slide: slides[index] } }));
      });
      current(slides, 0);
      arrows(root, controller);
      announce(root, 0, slides.length, slides[0].dataset.label, false);
      root.dispatchEvent(new CustomEvent('slidechange', { detail: { index: 0, slide: slides[0] } }));
      return controller;
    }
    fadeGallery(document.querySelector('.industry-visit-gallery:not(.fashion-events-gallery)'), '.visit-slide', 4700);

    const fashionGallery = document.querySelector('.fashion-events-gallery');
    if (fashionGallery) {
      const fashionCycle = fadeGallery(fashionGallery, '.visit-slide', 5500);
      fashionGallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        fashionCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });

      const copy = document.getElementById('fashion-events-copy');
      if (copy) {
        let currentEvent = null;
        fashionGallery.addEventListener('slidechange', e => {
          const slide = e.detail.slide;
          const eventIdx = slide ? (slide.dataset.event || '0') : '0';
          if (eventIdx === currentEvent) return;

          const prevCard = copy.querySelector('.fashion-event-card.is-active');
          const nextCard = copy.querySelector(`.fashion-event-card[data-event="${eventIdx}"]`);

          if (!prevCard) {
            if (nextCard) {
              nextCard.hidden = false;
              nextCard.classList.add('is-active');
            }
            currentEvent = eventIdx;
            return;
          }

          prevCard.classList.remove('is-active');
          window.setTimeout(() => {
            prevCard.hidden = true;
            if (nextCard) {
              nextCard.hidden = false;
              void nextCard.offsetWidth;
              nextCard.classList.add('is-active');
            }
            currentEvent = eventIdx;
          }, 200);
        });
      }
    }
    document.querySelectorAll('.law-activity-gallery').forEach(gallery => {
      const activityCycle = fadeGallery(gallery, '.law-activity-slide', 6500);
      gallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        activityCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });
    });
    const degreeGallery = document.querySelector('.degree-photo-gallery');
    if (degreeGallery) {
      const degreeCycle = fadeGallery(degreeGallery, '.degree-photo-slide', 5000);
      degreeGallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        degreeCycle.manual(event.key === 'ArrowRight' ? 1 : -1);
      });
    }
    refreshMotion();
  }

  // Campus Photo Gallery.
  function initCampusGallery() {
    const gallery = document.getElementById('mbaFacilitiesGallery');
    if (!gallery) return;
    const cards = [...gallery.querySelectorAll('.gallery-image')];
    const section = gallery.closest('#facilities');
    const close = gallery.querySelector('.nims-campus-close');
    if (!cards.length || !close) return;
    const framedPhotos = new Map();
    cards.forEach(card => {
      const image = card.querySelector('img');
      if (!image || card.querySelector('.gallery-image-backdrop')) return;
      image.classList.add('gallery-image-content');
      image.draggable = false;
      const backdrop = image.cloneNode(false);
      backdrop.className = 'gallery-image-backdrop';
      backdrop.alt = '';
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.loading = 'lazy';
      image.insertAdjacentElement('afterend', backdrop);
      if (image.dataset.wideSrc) framedPhotos.set(card, {
        image, backdrop, portraitSrc: image.getAttribute('src'), portraitWidth: Number(image.getAttribute('width')), portraitHeight: Number(image.getAttribute('height')),
        wideSrc: image.dataset.wideSrc, wideWidth: Number(image.dataset.wideWidth), wideHeight: Number(image.dataset.wideHeight)
      });
    });
    const motion = motionPreference;
    const hoverPreference = window.matchMedia('(hover: hover) and (pointer: fine)');
    let hoveredIndex = null;
    let phase = Math.min(2, cards.length - 1);
    let current = Math.round(phase);
    let expanded = false,
      transitioning = false,
      inView = false,
      focused = false;
    let frame = null,
      lastTime = 0,
      transitionTimer = null,
      pointer = null,
      touchPointer = null;
    let suppressClickUntil = 0,
      cardWidth = 380,
      spacing = 404;
    let galleryWidth = 0,
      nearby = false;
    let hovered = false,
      interacting = false,
      interactionTimer = null;
    const setStyle = (card, property, value) => {
      if (card.style[property] !== value) card.style[property] = value;
    };
    const wrap = value => (value % cards.length + cards.length) % cards.length;
    const visibility = new Map();
    const accessible = (card, visible, selected) => {
      if (nearby && visible) {
        const image = card.querySelector('img');
        if (image.loading !== 'eager') image.loading = 'eager';
      }
      const key = `${visible}:${selected}:${expanded}`;
      if (visibility.get(card) === key) return;
      visibility.set(card, key);
      card.inert = !visible;
      card.tabIndex = visible ? 0 : -1;
      card.setAttribute('aria-hidden', String(!visible));
      card.setAttribute('aria-expanded', String(expanded && selected));
      card.setAttribute('aria-pressed', String(selected));
      card.style.pointerEvents = visible ? 'auto' : 'none';
      card.classList.toggle('is-open', expanded && selected);
    };
    const render = () => {
      if (galleryWidth < 768) return;
      const width = galleryWidth;
      const bannerWidth = width - (width < 768 ? 32 : 64);
      const previewWidth = Math.max(cardWidth, width * .5);
      current = expanded ? current : wrap(Math.round(phase));
      const framedPhoto = expanded ? framedPhotos.get(cards[current]) : null;
      const widePhoto = width >= 768;
      gallery.classList.toggle('has-full-photo', !!framedPhoto);
      if (expanded) {
        const availableViewportHeight = Math.max(360, window.innerHeight - 112);
        const expandedPhotoHeight = Math.min(bannerWidth * 9 / 16, availableViewportHeight);
        gallery.style.setProperty('--campus-photo-height', `${expandedPhotoHeight}px`);
      }
      else gallery.style.removeProperty('--campus-photo-height');
      // Hover preview: the hovered card grows in place and its neighbours slide outward by the same amount, so nothing is covered.
      const previewIndex = !expanded && hoveredIndex !== null ? hoveredIndex : null;
      let previewOffset = 0, previewDisplacement = 0;
      if (previewIndex !== null) {
        previewOffset = wrap(previewIndex - phase + cards.length / 2) - cards.length / 2;
        const clamped = Math.max(previewWidth / 2 + 16, Math.min(width - previewWidth / 2 - 16, width / 2 + previewOffset * spacing));
        previewDisplacement = clamped - (width / 2 + previewOffset * spacing);
      }
      cards.forEach((card, index) => {
        const offset = wrap(index - phase + cards.length / 2) - cards.length / 2;
        const selected = index === current;
        const photo = framedPhotos.get(card);
        const preview = !expanded && index === hoveredIndex;
        if (photo) {
          const useWide = expanded && selected && widePhoto;
          const src = useWide ? photo.wideSrc : photo.portraitSrc;
          if (photo.image.getAttribute('src') !== src) {
            photo.image.src = src;
            photo.image.width = useWide ? photo.wideWidth : photo.portraitWidth;
            photo.image.height = useWide ? photo.wideHeight : photo.portraitHeight;
            photo.backdrop.src = src;
          }
        }
        const visible = expanded ? selected : Math.abs(offset * spacing) < width / 2 + cardWidth;
        accessible(card, visible, selected);
        card.classList.toggle('is-preview', preview);
        setStyle(card, 'opacity', visible ? '1' : '0');
        // Hidden cards need no geometry updates or compositor layers.
        setStyle(card, 'willChange', visible ? 'transform' : 'auto');
        if (!visible) return;
        setStyle(card, 'zIndex', String((expanded && selected) || preview ? 30 : 10 - Math.min(9, Math.round(Math.abs(
        offset)))));
        const previewCenter = Math.max(previewWidth / 2 + 16, Math.min(width - previewWidth / 2 - 16, width / 2 + offset * spacing));
        const sideShift = previewIndex === null || preview ? 0 : previewDisplacement + (offset > previewOffset ? 1 : -1) * (previewWidth - cardWidth) / 2;
        const x = expanded && selected ? -bannerWidth / 2 : preview ? previewCenter - width / 2 - previewWidth / 2 : offset * spacing - cardWidth / 2 + sideShift;
        const y = expanded && selected ? 0 : 24 - Math.min(3, Math.abs(offset)) * 12;
        const angle = (expanded && selected) || preview ? 0 : -offset * 5;
        setStyle(card, 'width', `${expanded && selected ? bannerWidth : preview ? previewWidth : cardWidth}px`);
        card.style.transform =
          `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotateY(${angle.toFixed(2)}deg)`;
      });
    };
    const stop = () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = null;
      lastTime = 0;
      gallery.dataset.moving = 'false';
    };
    // Move at a steady speed regardless of the display's refresh rate.
    const tick = time => {
      frame = null;
      if (lastTime) phase = wrap(phase + Math.min(time - lastTime, 50) * .04 / spacing);
      lastTime = time;
      render();
      frame = window.requestAnimationFrame(tick);
    };
    const start = () => {
      stop();
      if (galleryWidth < 768 || !inView || expanded || hovered || interacting || hoveredIndex !== null ||
          transitioning || focused || pointer || touchPointer || motion.matches || document.hidden ||
          document.documentElement.classList.contains('motion-paused')) return;
      gallery.dataset.moving = 'true';
      frame = window.requestAnimationFrame(tick);
    };
    const pauseInteraction = () => {
      interacting = true;
      if (galleryWidth < 768) gallery.style.scrollSnapType = 'none';
      stop();
      window.clearTimeout(interactionTimer);
      interactionTimer = window.setTimeout(() => {
        interacting = false;
        gallery.style.removeProperty('scroll-snap-type');
        start();
      }, 1800);
    };
    const clearPreview = () => {
      window.clearTimeout(transitionTimer);
      transitioning = false;
      hoveredIndex = null;
      gallery.classList.remove('is-transitioning');
    };
    const transition = change => {
      stop();
      window.clearTimeout(transitionTimer);
      transitioning = true;
      gallery.classList.add('is-transitioning');
      void gallery.offsetWidth;
      change();
      render();
      transitionTimer = window.setTimeout(() => {
        transitioning = false;
        gallery.classList.remove('is-transitioning');
        start();
      }, motion.matches ? 0 : 550);
    };
    const expand = index => {
      if (expanded && current === index) return;
      transition(() => {
        current = index;
        hoveredIndex = null;
        expanded = true;
        gallery.classList.add('is-expanded');
        close.hidden = false;
      });
      close.focus({
        preventScroll: true
      });
    };
    const collapse = () => {
      if (!expanded) return;
      transition(() => {
        expanded = false;
        phase = current;
        gallery.classList.remove('is-expanded');
        close.hidden = true;
      });
      gallery.focus({
        preventScroll: true
      });
      focused = false;
    };
    const step = direction => {
      if (expanded) {
        transition(() => {
          current = wrap(current + direction);
          phase = current;

        });
        return;
      }
      if (galleryWidth < 768) {
        gallery.scrollBy({ left: direction * (cardWidth + 16), behavior: motion.matches ? 'auto' : 'smooth' });

        return;
      }
      stop();
      clearPreview();
      const from = phase;
      const target = Math.round(from) + direction * Math.max(1, Math.floor(galleryWidth / spacing));
      if (motion.matches) {
        phase = wrap(target);
        render();
        return;
      }
      // Animate the phase, so wrapping cards never travel across the visible row.
      const started = performance.now();
      const advance = time => {
        const progress = Math.min(1, (time - started) / 650);
        const eased = progress * progress * (3 - 2 * progress);
        phase = wrap(from + (target - from) * eased);
        render();
        if (progress < 1) frame = requestAnimationFrame(advance);
        else {
          frame = null;
          start();
        }
      };
      frame = requestAnimationFrame(advance);
    };
    const resize = () => {
      galleryWidth = gallery.clientWidth;
      if (galleryWidth < 768 || !hoverPreference.matches) hoveredIndex = null;
      cardWidth = galleryWidth < 768 ? Math.min(320, Math.round(galleryWidth * .8)) : galleryWidth < 1200 ? 340 : 380;
      spacing = cardWidth + (galleryWidth < 768 ? 16 : 24);
      gallery.classList.toggle('is-native-scroll', galleryWidth < 768);
      if (galleryWidth < 768) {
        stop();
        cards.forEach(card => {
          card.inert = false;
          card.tabIndex = 0;
          card.setAttribute('aria-hidden', 'false');
          card.style.pointerEvents = 'auto';
          card.style.opacity = '1';
        });
        return;
      }
      render();
      start();
    };
    cards.forEach(card => {
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Expand ${card.querySelector('img').alt}`);
      card.addEventListener('pointerenter', event => {
        if (event.pointerType !== 'mouse' || !hoverPreference.matches || galleryWidth < 768 || expanded || pointer || interacting) return;
        transition(() => { hoveredIndex = cards.indexOf(card); });
      });
      card.addEventListener('pointerleave', () => {
        if (pointer || expanded || hoveredIndex !== cards.indexOf(card)) return;
        transition(() => { hoveredIndex = null; });
      });
      card.addEventListener('click', () => {
        if (galleryWidth < 768) return;
        if (!card.hidden && window.performance.now() >= suppressClickUntil) expand(cards.indexOf(card));
      });
      card.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        expand(cards.indexOf(card));
      });
    });
    gallery.tabIndex = 0;
    gallery.setAttribute('aria-label', 'NIMS campus photo gallery');
    close.addEventListener('click', collapse);
    section.querySelectorAll('.life-prev').forEach(button => button.addEventListener('click', () => step(-1)));
    section.querySelectorAll('.life-next').forEach(button => button.addEventListener('click', () => step(1)));
    initSliderAutoplay(section, () => {
      if (galleryWidth < 768 && gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth - 2) {
        gallery.scrollTo({left: 0, behavior: 'smooth'});
      } else step(1);
    }, {viewport: gallery, interval: 3000, enabled: () => galleryWidth < 768 && !expanded && !transitioning && !pointer && !touchPointer &&
      gallery.scrollWidth > gallery.clientWidth + 2});
    section.addEventListener('keydown', event => {
      if (event.key === 'Escape' && expanded) {
        event.preventDefault();
        collapse();
      }
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      step(event.key === 'ArrowRight' ? 1 : -1);
    });
    // Use direct mouse events on desktop. Listening for movement on `window`
    // keeps the drag alive even when the pointer leaves the visible card.
    gallery.addEventListener('mousedown', event => {
      if (event.button !== 0 || event.target.closest('button')) return;
      pointer = {
        x: event.clientX,
        y: event.clientY,
        phase,
        left: gallery.scrollLeft,
        current,
        dx: 0,
        dragged: false
      };
      stop();
    });
    window.addEventListener('mousemove', event => {
      if (!pointer) return;
      const dx = event.clientX - pointer.x,
        dy = event.clientY - pointer.y;
      pointer.dx = dx;
      if (!pointer.dragged && Math.abs(dx) < 7) return;
      if (!pointer.dragged && Math.abs(dx) < Math.abs(dy)) return;
      pointer.dragged = true;
      clearPreview();
      gallery.classList.add('is-dragging');
      if (event.cancelable) event.preventDefault();
      if (galleryWidth < 768) {
        gallery.style.scrollSnapType = 'none';
        gallery.scrollLeft = pointer.left - dx;
      }
      else if (!expanded) {
        phase = wrap(pointer.phase - dx / spacing);
        render();
      }
    });
    const release = () => {
      if (!pointer) return;
      const drag = pointer;
      if (drag.dragged) suppressClickUntil = window.performance.now() + 350;
      pointer = null;
      gallery.classList.remove('is-dragging');
      if (!drag.dragged) {
        start();
        return;
      }
      pauseInteraction();
      if (galleryWidth < 768) return;
      if (expanded) {
        if (Math.abs(drag.dx) >= 40) step(drag.dx < 0 ? 1 : -1);
        else start();
        return;
      }
      render();
    };
    window.addEventListener('mouseup', release);
    window.addEventListener('blur', release);
    gallery.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'mouse') return;
      hovered = true;
      stop();
    });
    gallery.addEventListener('pointerleave', () => {
      hovered = false;
      start();
    });
    // Match the video rows: horizontal wheels / trackpads and Shift + wheel
    // move the gallery, while a normal vertical wheel still scrolls the page.
    gallery.addEventListener('wheel', event => {
      if (event.ctrlKey || expanded || pointer || touchPointer) return;
      if (!event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
      const delta = event.deltaX || (event.shiftKey ? event.deltaY : 0);
      if (!delta) return;
      if (event.cancelable) event.preventDefault();
      pauseInteraction();
      clearPreview();
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? galleryWidth : 1;
      if (galleryWidth < 768) gallery.scrollLeft += delta * unit;
      else {
        phase = wrap(phase + delta * unit / spacing);
        render();
      }
    }, {passive: false});
    gallery.addEventListener('touchstart', event => {
      if (galleryWidth < 768 || event.touches.length !== 1 || event.target.closest('button')) return;
      const touch = event.touches[0];
      touchPointer = {
        x: touch.clientX,
        y: touch.clientY,
        phase,
        current,
        dx: 0,
        dragged: false
      };
      stop();
    }, {passive: true});
    gallery.addEventListener('touchmove', event => {
      if (!touchPointer || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dx = touch.clientX - touchPointer.x;
      const dy = touch.clientY - touchPointer.y;
      touchPointer.dx = dx;
      if (!touchPointer.dragged && Math.abs(dx) < 7) return;
      if (!touchPointer.dragged && Math.abs(dx) <= Math.abs(dy)) return;
      touchPointer.dragged = true;
      hoveredIndex = null;
      gallery.classList.add('is-dragging');
      if (event.cancelable) event.preventDefault();
      if (!expanded) {
        phase = wrap(touchPointer.phase - dx / spacing);
        render();
      }
    }, {passive: false});
    const releaseTouch = () => {
      if (!touchPointer) return;
      const drag = touchPointer;
      touchPointer = null;
      gallery.classList.remove('is-dragging');
      if (!drag.dragged) {
        start();
        return;
      }
      suppressClickUntil = window.performance.now() + 350;
      if (expanded) {
        if (Math.abs(drag.dx) >= 36) step(drag.dx < 0 ? 1 : -1);
        else start();
        return;
      }
      transition(() => { phase = wrap(Math.round(phase)); });
    };
    gallery.addEventListener('touchend', releaseTouch, {passive: true});
    gallery.addEventListener('touchcancel', releaseTouch, {passive: true});
    gallery.addEventListener('dragstart', event => event.preventDefault());
    gallery.querySelectorAll('img').forEach(image => { image.draggable = false; });
    section.addEventListener('focusin', event => {
      focused = event.target.matches(':focus-visible');
      start();
    });
    section.addEventListener('focusout', event => {
      focused = section.contains(event.relatedTarget) && event.relatedTarget.matches(':focus-visible');
      start();
    });
    new window.MutationObserver(start).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    document.addEventListener('visibilitychange', start);
    motion.addEventListener('change', start);
    window.addEventListener('resize', resize);
    if ('IntersectionObserver' in window) {
      const preload = new window.IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        nearby = true;
        render();
        preload.disconnect();
      }, {
        rootMargin: '1000px 0px'
      });
      preload.observe(gallery);
      new window.IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        start();
      }, {
        threshold: .05
      }).observe(gallery);
    } else inView = true;
    resize();
    start();
  }

  // Faculty Profiles.
  function initFacultyProfiles() {
    const section = document.getElementById('faculty');
    if (!section) return;
    const people = facultyProfiles,
      track = section.querySelector('.mentor-track');
    const cards = [...section.querySelectorAll('[data-mentor]')],
      dialog = document.getElementById('mentor-dialog');
    const portraitImages = cards.map(card => card.querySelector('img'));
    const shell = dialog.querySelector('.mentor-dialog-shell'),
      photo = dialog.querySelector('[data-mentor-photo]'),
      close = dialog.querySelector('.mentor-close');
    const thumbs = [...dialog.querySelectorAll('[data-mentor-thumb]')],
      motion = motionPreference;
    const animations = new Set();
    let portraitsReady = false,
      portraitLoad = 0;
    let selected = 0,
      phase = 0,
      request = 0,
      flight = null,
      hiddenSource = null,
      closing = false,
      watchdog = null;
    let frame = null,
      lastTime = 0,
      inView = false,
      keyboardFocus = false,
      manualTimer = null,
      manualPending = false,
      pointer = null,
      suppressClickUntil = 0;
    let layout = {
      slots: 5,
      step: 250,
      width: 226,
      viewport: 1250
    };
    const wrap = index => (index % people.length + people.length) % people.length;
    const announce = () => {
      section.querySelector('[data-mentor-announcement]').textContent =
        `${people[selected].name}, ${people[selected].role}.`;
    };

    function render() {
      const {
        slots,
        step,
        width,
        viewport
      } = layout, half = people.length / 2;
      if (!dialog.open) selected = wrap(Math.round(phase));
      cards.forEach((card, i) => {
        const offset = wrap(i - phase + half) - half,
          distance = Math.abs(offset);
        const outside = slots === 1 ? distance > .55 : Math.abs(offset * step) > viewport / 2 + width / 2;
        const top = Math.max(0, slots === 1 ? 8 : slots === 5 ? 36 - distance * 16 : slots === 3 ?
          24 - distance * 12 : 16 - distance * 10);
        card.style.transform = `translate3d(${(offset * step).toFixed(2)}px, ${top.toFixed(2)}px, 0) rotateY(${(slots === 1 ? 0 : offset * -5).toFixed(2)}deg)`;
        card.style.zIndex = String(10 - Math.round(distance));
        if (card.dataset.outside !== String(outside)) {
          card.dataset.outside = String(outside);
          card.inert = outside;
          card.tabIndex = outside ? -1 : 0;
          card.setAttribute('aria-hidden', String(outside));
        }
        const active = String(i === selected),
          expanded = String(dialog.open && i === selected);
        if (card.getAttribute('aria-pressed') !== active) card.setAttribute('aria-pressed', active);
        if (card.getAttribute('aria-expanded') !== expanded) card.setAttribute('aria-expanded', expanded);
      });
      const counter = section.querySelector('[data-lineup-counter]');
      const label = `${String(selected+1).padStart(2,'0')} / ${String(people.length).padStart(2,'0')}`;
      if (counter.textContent !== label) counter.textContent = label;
    }

    function measure() {
      const slots = innerWidth <= 575 ? 1 : track.clientWidth >= 1100 ? 5 : track.clientWidth >= 700 ? 3 : 2.1,
        step = track.clientWidth / slots;
      layout = {
        slots,
        step,
        width: Math.min(310, step - (slots === 1 ? 40 : slots === 2.1 ? 8 : 24)),
        viewport: track.clientWidth
      };
      if (slots === 1) phase = wrap(Math.round(phase));
      track.style.setProperty('--mentor-width', `${layout.width}px`);
      render();
      if (slots === 1) stopAuto();
      else startAuto();
    }

    function stopAuto() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      lastTime = 0;
      track.dataset.moving = 'false';
    }

    function tick(time) {
      frame = null;
      if (lastTime) phase = wrap(phase + Math.min(time - lastTime, 50) * .08 / layout.step);
      lastTime = time;
      render();
      frame = requestAnimationFrame(tick);
    }

    function startAuto() {
      stopAuto();
      if (!portraitsReady || layout.slots === 1 || !inView || dialog.open || closing || keyboardFocus || pointer ||
        manualPending || motion.matches || document.hidden || document.documentElement.classList.contains('motion-paused')
        ) return;
      track.dataset.moving = 'true';
      frame = requestAnimationFrame(tick);
    }

    initSliderAutoplay(section, () => select(Math.round(phase) + 1), {
      viewport: track,
      enabled: () => portraitsReady && layout.slots === 1 && !dialog.open && !closing && !manualPending
    });

    function select(index) {
      selected = wrap(index);
      phase = selected;
      render();
    }

    function preparePortraits() {
      const version = ++portraitLoad;
      portraitsReady = false;
      stopAuto();
      Promise.allSettled(portraitImages.map(image => {
        image.loading = 'eager';
        return image.decode();
      })).then(() => {
        if (version !== portraitLoad) return;
        portraitsReady = portraitImages.every(image => image.complete && image.naturalWidth > 0);
        startAuto();
      });
    }

    function browse(index) {
      stopAuto();
      clearTimeout(manualTimer);
      manualPending = true;
      select(index);
      announce();
      manualTimer = setTimeout(() => {
        manualPending = false;
        startAuto();
      }, motion.matches ? 0 : 760);
    }

    function education(value) {
      let depth = 0,
        start = 0;
      const parts = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i] === '(') depth++;
        if (value[i] === ')') depth--;
        if (value[i] === ',' && depth === 0) {
          parts.push(value.slice(start, i).trim());
          start = i + 1;
        }
      }
      parts.push(value.slice(start).trim());
      const rank = part => /^Ph\.?\s*D\.?/i.test(part) ? 0 : /^M\.?\s*Phil\b/i.test(part) ? 1 : /^MBA\b/i.test(part) ? 2 :
        /^M\.?\s*Com\b/i.test(part) ? 3 : /^(M\.?\s*A|MTTM)\b/i.test(part) ? 4 : /^(PG|Postgraduate)/i.test(part) ? 5 : 6;
      const hasHigher = parts.some(part => rank(part) < 6);
      return parts.filter(part => part && !(hasHigher && /^B\.?\s*(?:Com|BA|A|Sc|Tech|E|Ed|CA|TM)\b/i.test(part))).sort((a,
        b) => rank(a) - rank(b)).join(', ');
    }
    const setText = (selector, value) => {
      dialog.querySelector(selector).textContent = value;
    };

    function item(label, value) {
      const div = document.createElement('div'),
        dt = document.createElement('dt'),
        dd = document.createElement('dd');
      dt.textContent = titleCaseLabel(label);
      const pending = value.match(/^(\d+)\s+(In process)$/i);
      if (pending) {
        dd.textContent = pending[1];
        const note = document.createElement('small');
        note.textContent = titleCaseLabel(pending[2]);
        dd.append(note);
      } else dd.textContent = value;
      div.append(dt, dd);
      return div;
    }

    // Publication figures retain the source's category when no overall total is given.
    const facultyPresentation = {
      'm-p-singh': {research:['16','ABDC publications'], honour:['trophy','BOLT Award','PHD Chambers, New Delhi']},
      'anupama-pandey': {research:['28','Research publications'], honour:['sarojini','Dr. Sarojini Naidu International Award','2025 · Education & leadership']},
      's-maria-antonyraj': {research:['25','UGC & peer-reviewed'], honour:['academic','Finance & Marketing','Faculty specialisation']},
      'radhakrishna': {research:['20+','Peer-reviewed publications'], honour:['research','Government-sponsored research','5 projects awarded']},
      'thanga-prashath': {research:['22','International peer-reviewed'], honour:['trophy','Best Research Grant Holder','Higher Education Icon Awards · 2024']},
      'sathishkumar': {research:['16','Research publications'], honour:['trophy','Best Faculty & NSS Officer','Anna University · Tamil Nadu Government']},
      'isac-gunday': {research:['11','Research publications'], honour:['academic','Doctoral research supervisor','International conference session chair']},
      'ruchi-garg': {research:['15','Peer-reviewed papers'], honour:['research','Faculty Induction · A+','University of Rajasthan']},
      'nivedita-pandey': {research:['34','Research papers'], honour:['research','Research & innovation','Scopus & Web of Science publications']},
      'aachal-dwivedi': {research:['8','Peer-reviewed publications'], honour:['medal','Chief Minister Gold Medal','MBA']},
      'abhishek-vaishnava': {research:['29','Research publications'], honour:['academic','Doctoral supervision','Two Ph.D. scholars · 2025']},
      'swati-prajapat': {research:['3','ABDC publications'], honour:['medal','Best Paper Award','University of Rajasthan']},
      'arushi-shekhawat': {research:['3','Peer-reviewed publications'], honour:['medal','Master’s Gold Medalist','Academic excellence']},
      'shyed-irshad-bukhar': {research:['2','Scopus-indexed publications'], honour:['academic','Finance & Marketing','Faculty specialisation']},
      'aishwarya-singh': {research:['6','Research publications'], honour:['trophy','Best Research Paper Presenter','International conferences · 2026']},
      'shruti-mathur': {research:['18','Research papers'], honour:['academic','Research supervisor','Shyam University, Dausa']},
      'chetan-bagaria': {research:['2','UGC-CARE publications'], honour:['academic','Conference session chair','International conference · Goa']},
      'harsha-kumawat': {research:['5','UGC-CARE publications'], honour:['medal','Young Researcher Recognition','DTORR · Second place']},
      'pradeep-singh-shekhawat': {research:['3','Scopus-indexed publications'], honour:['academic','Healthcare administration','Faculty specialisation']},
      'priya-devi': {research:['3','Scopus-indexed publications'], honour:['academic','Finance','Faculty specialisation']},
      'sonali-maheshwari': {research:['1','Web of Science publication'], honour:['academic','Accounting & Finance','Faculty specialisation']},
      'ravindra-kumar': {research:['20','Research papers'], honour:['academic','IQAC Coordinator','Life Member · Indian Accounting Association']},
      'vishnu-kumar-mahawar': {research:['7','Research publications'], honour:['medal','Best Research Paper Award','Two international conferences · 2026']}
    };
    const honourPaths = {
      trophy: '<path d="M18 8h28v12c0 12-5 18-14 18S18 32 18 20V8Zm0 5H9v7c0 9 5 12 13 12m24-19h9v7c0 9-5 12-13 12M32 38v12m-10 6h20M25 50h14"/>',
      medal: '<path d="m19 5 13 18L45 5M15 5h12l5 8 5-8h12L39 28H25Z"/><circle cx="32" cy="42" r="15"/><path d="m32 32 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>',
      academic: '<path d="m5 24 27-14 27 14-27 14Zm10 6v15c10 9 24 9 34 0V30M59 24v23M9 53h46"/>',
      research: '<path d="M20 7h24v50H12V15h8Zm0 0v12H12m14 8h11m-11 8h11m-11 8h7"/><circle cx="45" cy="43" r="10"/><path d="m52 51 7 8M42 43l2 2 5-5"/>'
    };

    function isBookMetric(metric) {
      return /^(Books|Edited books)$/i.test(metric.label);
    }

    function hasPositiveCount(metric) {
      return parseFloat(metric.value) > 0;
    }

    function hasDisplayableExperience(metric) {
      const duration = parseFloat(metric.value);
      return /experience/i.test(metric.label) &&
        duration / (/months?/i.test(metric.value) ? 12 : 1) >= 3;
    }

    function populateFacultyPresentation(p) {
      const presentation = facultyPresentation[p.id],
        booksMetric = p.metrics.find(isBookMetric),
        bookCount = Math.max(0, parseInt(booksMetric?.value, 10) || 0),
        chaptersMetric = p.metrics.find(m => /^Book chapters$/i.test(m.label)),
        patentMetric = p.metrics.find(m => /^Patents & copyright$/i.test(m.label) && hasPositiveCount(m)),
        separatePatents = p.metrics.filter(m => /^(Utility patents|Design patents|Copyrights)$/i.test(m.label) && hasPositiveCount(m)),
        experience = p.metrics.filter(hasDisplayableExperience);
      const summaryItems = [
        ...(bookCount ? [item(booksMetric.label, booksMetric.value)] : []),
        ...(chaptersMetric && parseInt(chaptersMetric.value, 10) > 0 ? [item(chaptersMetric.label, chaptersMetric.value)] : []),
        ...(patentMetric ? [item(patentMetric.label, patentMetric.value)] : separatePatents.map(metric => item(metric.label, metric.value)))
      ];
      const summary = dialog.querySelector('[data-mentor-summary]');
      summary.replaceChildren(...summaryItems);
      summary.hidden = summaryItems.length === 0;
      summary.style.setProperty('--mentor-summary-columns', Math.max(1, summaryItems.length));
      setText('[data-mentor-experience-text]', experience.map(m => `${m.value.replace(/\b1 years\b/,'1 year')} (${m.label.replace(' experience','')})`).join(' · '));
      dialog.querySelector('[data-mentor-experience-text]').closest('div').hidden = !experience.length;
      // Only named books belong in the library; a count alone cannot supply titles.
      const namedBooks = (p.books || []).filter(book => typeof book?.title === 'string' && book.title.trim());
      const bookCards = namedBooks.map(book => {
        const card = document.createElement('article'),
          image = document.createElement('img'),
          copy = document.createElement('div'),
          title = document.createElement('h5');
        card.className = 'mentor-book-card';
        image.src = book.cover || 'images/faculty-book-generic-cover.svg';
        image.alt = '';
        image.width = 180;
        image.height = 240;
        image.decoding = 'async';
        title.textContent = book.title.trim();
        copy.append(title);
        card.append(image,copy);
        return card;
      });
      dialog.querySelector('[data-mentor-books]').replaceChildren(...bookCards);
      const library = dialog.querySelector('.mentor-library');
      library.hidden = !bookCards.length;
      library.open = false;
      const [kind,title,note] = presentation.honour,
        feature = dialog.querySelector('[data-mentor-feature-award]'),
        emblem = document.createElement('span'),
        titleElement = document.createElement('strong'),
        noteElement = document.createElement('small'),
        copy = document.createElement('span');
      emblem.className = 'mentor-feature-emblem';
      titleElement.textContent = titleCaseLabel(title);
      noteElement.textContent = titleCaseLabel(note);
      copy.append(titleElement,noteElement);
      feature.classList.toggle('is-sarojini',kind === 'sarojini');
      if (kind === 'sarojini') {
        const link = document.createElement('a'),
          image = document.createElement('img');
        link.href = 'https://glfnoida.org/sarojani-naidu-awards/';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        image.src = 'images/faculty-award-sarojini-naidu-2025-official.jpg';
        image.alt = 'Dr. Sarojini Naidu International Award, 9th edition, 2025';
        emblem.append(image);
        link.append(emblem,copy);
        feature.replaceChildren(link);
      } else {
        emblem.innerHTML = `<svg aria-hidden="true" viewBox="0 0 64 64">${honourPaths[kind]}</svg>`;
        feature.replaceChildren(emblem,copy);
      }
    }

    function populate() {
      const p = people[selected],
        prefix = p.name.match(/^(?:Prof\.\s*\(Dr\.\)|Dr\.|Mr\.|Ms\.)\s*/)?.[0] || '';
      dialog.classList.toggle('is-leadership-profile', p.id === 'm-p-singh' || p.id === 'anupama-pandey');
      setText('[data-mentor-prefix]', prefix.trim());
      setText('[data-mentor-name]', p.name.slice(prefix.length));
      setText('[data-mentor-role]', p.role);
      setText('[data-mentor-role-photo]', p.role);
      setText('[data-mentor-qualification]', education(p.qualification));
      setText('[data-mentor-specialisation]', p.specialisation);
      setText('[data-mentor-research]', p.research);
      const portrait = cards[selected].querySelector('img');
      photo.src = portrait.currentSrc || portrait.src;
      photo.alt = portrait.alt || p.name;
      const fullSource = cards[selected].dataset.profileSrc,
        profileRequest = request;
      if (fullSource) {
        const highResolution = new Image();
        highResolution.decoding = 'async';
        highResolution.src = fullSource;
        highResolution.decode().then(() => {
          if (request === profileRequest && dialog.open && !closing) photo.src = highResolution.src;
        }).catch(() => {});
      }
      photo.width = portrait.getAttribute('width');
      photo.height = portrait.getAttribute('height');
      photo.parentElement.classList.add('is-cutout');
      const banner = dialog.querySelector('.mentor-award-banner'),
        symbol = dialog.querySelector('.mentor-award-symbol'),
        award = p.id === 'anupama-pandey';
      symbol.hidden = !award;
      symbol.classList.toggle('is-sarojini', award);
      symbol.innerHTML = award ?
        '<img src="images/faculty-anupama-pandey-award-2025.avif" alt="Dr. Sarojini Naidu International Award, 2025"/>' :
        '';
      banner.querySelector('h4').textContent = award ? 'Dr. Sarojini Naidu International Award · 2025' :
        'Academic Achievements';
      dialog.querySelector('[data-mentor-achievements]').innerHTML = award ?
        '<p>For education and leadership. Awarded by the International Chamber of Media &amp; Entertainment Industry.</p>' :
        p.achievement;
      dialog.querySelector('.mentor-honours').hidden = !p.achievement;
      populateFacultyPresentation(p);
      thumbs.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === selected)));
      const roster = dialog.querySelector('.mentor-roster'),
        activeThumb = thumbs[selected];
      roster.scrollLeft = Math.max(0, activeThumb.offsetLeft - roster.offsetLeft - (roster.clientWidth - activeThumb.offsetWidth) / 2);
      setText('[data-mentor-counter]',
      `${String(selected+1).padStart(2,'0')} / ${String(people.length).padStart(2,'0')}`);
      dialog.scrollTop = 0;
    }

    function cleanup() {
      clearTimeout(watchdog);
      watchdog = null;
      animations.forEach(animation => animation.cancel());
      animations.clear();
      flight?.remove();
      flight = null;
      if (hiddenSource) hiddenSource.style.visibility = '';
      hiddenSource = null;
      photo.style.visibility = '';
      shell.style.visibility = '';
      shell.style.opacity = '';
      shell.style.transform = '';
    }

    function animate(element, keyframes, options) {
      if (motion.matches || !element.animate) return Promise.resolve();
      let animation;
      try {
        animation = element.animate(keyframes, options);
      } catch {
        return Promise.resolve();
      }
      animations.add(animation);
      let timeout;
      const deadline = new Promise(resolve => {
        timeout = setTimeout(resolve, Number(options.duration || 0) + Number(options.delay || 0) + 180);
      });
      return Promise.race([animation.finished.catch(() => {}), deadline]).finally(() => {
        clearTimeout(timeout);
        animation.cancel();
        animations.delete(animation);
      });
    }

    function imageReady(image) {
      if (image.complete) return Promise.resolve(image.naturalWidth > 0);
      return new Promise(resolve => {
        let timeout;
        const finish = () => {
          clearTimeout(timeout);
          image.removeEventListener('load', finish);
          image.removeEventListener('error', finish);
          resolve(image.complete && image.naturalWidth > 0);
        };
        image.addEventListener('load', finish);
        image.addEventListener('error', finish);
        timeout = setTimeout(finish, 180);
      });
    }
    const pose = rect => ({
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`
    });

    function createFlight(src, start) {
      const image = document.createElement('img');
      image.className = 'mentor-flight';
      image.src = src;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      Object.assign(image.style, pose(start));
      dialog.append(image);
      flight = image;
      return image;
    }

    function finishOpen(token, focus) {
      if (token !== request || !dialog.open || closing) return;
      cleanup();
      dialog.dataset.state = 'open';
      if (focus) close.focus({
        preventScroll: true
      });
      announce();
    }
    async function show(index, origin) {
      const token = ++request;
      stopAuto();
      cleanup();
      closing = false;
      const alreadyOpen = dialog.open,
        source = origin?.querySelector('img') || cards[wrap(index)].querySelector('img'),
        start = source.getBoundingClientRect();
      select(index);
      populate();
      if (!alreadyOpen) dialog.showModal();
      document.body.classList.add('mentor-modal-open');
      dialog.dataset.state = 'opening';
      render();
      watchdog = setTimeout(() => finishOpen(token, !alreadyOpen), 1500);
      if (motion.matches) {
        finishOpen(token, !alreadyOpen);
        return;
      }
      const image = createFlight(source.currentSrc || source.src, start);
      const ready = await imageReady(image);
      if (token !== request || closing) return;
      if (!ready) {
        finishOpen(token, !alreadyOpen);
        return;
      }
      hiddenSource = source;
      source.style.visibility = 'hidden';
      photo.style.visibility = 'hidden';
      const target = photo.getBoundingClientRect(),
        height = Math.min(390, innerHeight * .55),
        width = height * 2 / 3;
      const centre = {
        left: (innerWidth - width) / 2,
        top: (innerHeight - height) / 2,
        width,
        height
      };
      const reveal = animate(shell, [{
        opacity: .72,
        transform: 'translateY(8px)'
      }, {
        opacity: 1,
        transform: 'translateY(0)'
      }], {
        duration: 420,
        easing: 'cubic-bezier(.22,1,.36,1)'
      });
      await animate(image, [{
        ...pose(start),
        offset: 0
      }, {
        ...pose(centre),
        offset: .4
      }, {
        ...pose(centre),
        offset: .48
      }, {
        ...pose(target),
        offset: 1
      }], {
        duration: 820,
        easing: 'cubic-bezier(.4,0,.2,1)',
        fill: 'forwards'
      });
      await reveal;
      finishOpen(token, !alreadyOpen);
    }

    function finishClose(token) {
      if (token !== request) return;
      cleanup();
      dialog.close();
      closing = false;
      document.body.classList.remove('mentor-modal-open');
      phase = selected;
      render();
      cards[selected].focus({
        preventScroll: true
      });
      startAuto();
    }
    async function hide() {
      if (!dialog.open || closing) return;
      closing = true;
      const token = ++request;
      cleanup();
      dialog.dataset.state = 'closing';
      watchdog = setTimeout(() => finishClose(token), 760);
      if (motion.matches) {
        finishClose(token);
        return;
      }
      const source = cards[selected].querySelector('img'),
        start = photo.getBoundingClientRect(),
        target = source.getBoundingClientRect(),
        image = createFlight(photo.currentSrc || photo.src, start);
      const ready = await imageReady(image);
      if (token !== request) return;
      if (!ready) {
        finishClose(token);
        return;
      }
      hiddenSource = source;
      source.style.visibility = 'hidden';
      photo.style.visibility = 'hidden';
      const fade = animate(shell, [{
        opacity: 1
      }, {
        opacity: .45
      }], {
        duration: 340,
        fill: 'forwards'
      });
      await animate(image, [pose(start), pose(target)], {
        duration: 430,
        fill: 'forwards',
        easing: 'cubic-bezier(.4,0,.2,1)'
      });
      await fade;
      finishClose(token);
    }
    cards.forEach((card, i) => {
      card.addEventListener('click', () => {
        if (performance.now() >= suppressClickUntil) show(i, card);
      });
      card.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        browse(event.key === 'Home' ? 0 : event.key === 'End' ? people.length - 1 : selected + (event.key ===
          'ArrowRight' ? 1 : -1));
        cards[selected].focus({
          preventScroll: true
        });
      });
    });
    const visibleFacultyCount = () => Math.max(1, Math.floor(layout.slots));
    section.querySelector('[data-mentor-prev]').addEventListener('click', () => browse(selected - visibleFacultyCount()));
    section.querySelector('[data-mentor-next]').addEventListener('click', () => browse(selected + visibleFacultyCount()));
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i, thumb)));
    dialog.querySelector('.mentor-detail-prev').addEventListener('click', () => show(selected - 1, thumbs[wrap(selected -
      1)]));
    dialog.querySelector('.mentor-detail-next').addEventListener('click', () => show(selected + 1, thumbs[wrap(selected +
      1)]));
    close.addEventListener('click', hide);
    dialog.addEventListener('cancel', event => {
      event.preventDefault();
      hide();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const b = dialog.getBoundingClientRect();
      if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom)
        hide();
    });
    dialog.addEventListener('close', () => {
      ++request;
      cleanup();
      closing = false;
      document.body.classList.remove('mentor-modal-open');
      phase = selected;
      render();
      startAuto();
    });
    track.addEventListener('pointerdown', event => {
      if (event.button !== 0 || event.isPrimary === false) return;
      stopAuto();
      pointer = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        phase,
        dragged: false
      };
    });
    track.addEventListener('pointermove', event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      const dx = event.clientX - pointer.x,
        dy = event.clientY - pointer.y;
      if (!pointer.dragged && (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy))) return;
      pointer.dragged = true;
      if (!track.hasPointerCapture(event.pointerId)) track.setPointerCapture(event.pointerId);
      if (event.cancelable) event.preventDefault();
      track.dataset.moving = 'true';
      phase = wrap(pointer.phase - dx / layout.step);
      render();
    });
    const release = event => {
      if (!pointer || event.pointerId !== pointer.id) return;
      if (pointer.dragged) suppressClickUntil = performance.now() + 350;
      if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
      if (layout.slots === 1) {
        const dx = event.clientX - pointer.x;
        const direction = event.type !== 'pointercancel' && pointer.dragged && Math.abs(dx) > 40 ? (dx < 0 ? 1 : -1) :
        0;
        phase = wrap(Math.round(pointer.phase) + direction);
        render();
      }
      pointer = null;
      startAuto();
    };
    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);
    track.addEventListener('pointerleave', event => {
      if (pointer && !pointer.dragged) release(event);
    });
    track.addEventListener('dragstart', event => event.preventDefault());
    section.addEventListener('focusin', event => {
      if (!dialog.contains(event.target)) {
        keyboardFocus = event.target.matches(':focus-visible');
        startAuto();
      }
    });
    section.addEventListener('focusout', () => queueMicrotask(() => {
      keyboardFocus = section.contains(document.activeElement) && !dialog.contains(document.activeElement) &&
        document.activeElement.matches(':focus-visible');
      startAuto();
    }));
    document.addEventListener('visibilitychange', startAuto);
    new MutationObserver(startAuto).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    motion.addEventListener('change', () => {
      if (motion.matches) animations.forEach(animation => animation.finish());
      startAuto();
    });
    new ResizeObserver(measure).observe(track);
    window.addEventListener('resize', () => {
      measure();
      preparePortraits();
      if (dialog.open && dialog.dataset.state === 'opening') finishOpen(request, false);
      else if (closing) finishClose(request);
    });
    const preloadObserver = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      portraitImages.forEach(image => {
        image.fetchPriority = 'high';
      });
      preloadObserver.disconnect();
    }, {
      rootMargin: '1400px 0px'
    });
    preloadObserver.observe(section);
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      startAuto();
    }, {
      threshold: .05
    }).observe(track);
    measure();
    preparePortraits();
    requestAnimationFrame(() => track.classList.add('is-ready'));
    startAuto();
  }

  // Founder Stories.
  function initFounderStories() {
    document.querySelectorAll('[data-founder-rotation]').forEach(card => {
      const slides = [...card.querySelectorAll('[data-venture]')];
      const dots = [...card.querySelectorAll('[data-venture-select]')];
      const pause = card.querySelector('.nims-venture-pause');
      const progress = card.querySelector('.nims-venture-progress span');
      const currentLabel = card.querySelector('[data-venture-current]');
      const rotationName = card.classList.contains('nims-founder-story--cofounders') ? 'co-founder' : 'venture';
      card.querySelectorAll('[data-venture-total]').forEach(label => {
        label.textContent = String(slides.length);
      });
      if (slides.length < 2 || !pause || !progress) return;
      const duration = 5000;
      let current = 0;
      let timer = null;
      const preference = motionPreference;
      let paused = preference.matches;
      let visible = true;
      let hovered = false;
      let touching = false;
      let touchTimer = null;
      const pauseTouch = () => {
        touching = true;
        clearTimeout(touchTimer);
        schedule();
        touchTimer = setTimeout(() => {
          touching = false;
          schedule();
        }, 2000);
      };
      const updatePause = () => {
        pause.setAttribute('aria-pressed', String(paused));
        pause.setAttribute('aria-label', `${paused ? 'Resume' : 'Pause'} ${rotationName} rotation`);
        pause.firstElementChild.textContent = paused ? '\u25b6' : '\u2161';
      };
      const resetProgress = () => {
        progress.style.animation = 'none';
        void progress.offsetWidth;
        progress.style.animation = `nims-venture-countdown ${duration}ms linear forwards`;
        progress.style.animationPlayState = paused || document.hidden || !visible || hovered || touching ? 'paused' : 'running';
      };
      const show = index => {
        current = index;
        slides[index].querySelectorAll('img').forEach(image => {
          image.loading = 'eager';
        });
        if (currentLabel) currentLabel.textContent = String(current + 1);
        slides.forEach((slide, i) => {
          const active = i === current;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', String(!active));
          slide.inert = !active;
        });
        dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
        resetProgress();
      };
      const schedule = () => {
        window.clearInterval(timer);
        timer = null;
        if (!paused && !document.hidden && visible && !hovered && !touching) {
          resetProgress();
          timer = window.setInterval(() => show((current + 1) % slides.length), duration);
        } else {
          progress.style.animationPlayState = 'paused';
        }
      };
      dots.forEach((dot, i) => dot.addEventListener('click', () => {
        show(i);
        schedule();
      }));
      pause.addEventListener('click', () => {
        paused = !paused;
        updatePause();
        schedule();
      });
      card.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse') {
          hovered = true;
          schedule();
        }
      });
      card.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse') {
          hovered = false;
          schedule();
        }
      });
      card.addEventListener('pointerdown', e => {
        if (e.pointerType === 'touch') {
          pauseTouch();
        }
      }, { passive: true });
      card.addEventListener('touchstart', pauseTouch, { passive: true });
      card.addEventListener('touchend', pauseTouch, { passive: true });
      card.addEventListener('touchcancel', pauseTouch, { passive: true });
      document.addEventListener('visibilitychange', schedule);
      new window.IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        schedule();
      }, {
        threshold: 0
      }).observe(card);
      preference.addEventListener('change', () => {
        paused = preference.matches;
        updatePause();
        schedule();
      });
      updatePause();
      show(0);
      schedule();
    });
  }

  // Keep Abhishek's portrait fixed while his three internship details rotate.
  function initInternshipRotators() {
    document.querySelectorAll('[data-internship-rotator]').forEach(card => {
      const slides = [...card.querySelectorAll('[data-internship-detail]')],
        buttons = [...card.querySelectorAll('[data-internship-select]')],
        toggle = card.querySelector('[data-internship-pause]');
      if (slides.length < 2 || !toggle) return;
      let index = 0, timer = null, visible = true, paused = motionPreference.matches;
      let hovered = false, touching = false, touchTimer = null;
      const pauseTouch = () => {
        touching = true;
        clearTimeout(touchTimer);
        schedule();
        touchTimer = setTimeout(() => {
          touching = false;
          schedule();
        }, 2000);
      };
      slides.forEach(slide => slide.querySelectorAll('img').forEach(photo => { photo.loading = 'eager'; }));
      const show = next => {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => {
          slide.classList.toggle('is-active', i === index);
          slide.setAttribute('aria-hidden', String(i !== index));
          slide.inert = i !== index;
        });
        buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
        card.dataset.activeIndex = String(index);
      };
      const schedule = () => {
        clearInterval(timer);
        timer = null;
        toggle.classList.toggle('is-paused', paused);
        const label = `${paused ? 'Play' : 'Pause'} internship rotation`;
        toggle.setAttribute('aria-label', label);
        toggle.title = label;
        if (!paused && visible && !document.hidden && !hovered && !touching && !card.querySelector('.law-internship-organisation:focus')) {
          timer = setInterval(() => show(index + 1), 5000);
        }
      };
      buttons.forEach((button, i) => button.addEventListener('click', () => { show(i); schedule(); }));
      toggle.addEventListener('click', () => { paused = !paused; schedule(); });
      card.addEventListener('pointerenter', e => {
        if (e.pointerType === 'mouse') {
          hovered = true;
          schedule();
        }
      });
      card.addEventListener('pointerleave', e => {
        if (e.pointerType === 'mouse') {
          hovered = false;
          schedule();
        }
      });
      card.addEventListener('pointerdown', e => {
        if (e.pointerType === 'touch') {
          pauseTouch();
        }
      }, { passive: true });
      card.addEventListener('touchstart', pauseTouch, { passive: true });
      card.addEventListener('touchend', pauseTouch, { passive: true });
      card.addEventListener('touchcancel', pauseTouch, { passive: true });
      card.addEventListener('focusin', schedule);
      card.addEventListener('focusout', () => setTimeout(schedule, 0));
      document.addEventListener('visibilitychange', schedule);
      motionPreference.addEventListener('change', event => { paused = event.matches; schedule(); });
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        schedule();
      }, { threshold: 0 }).observe(card);
      show(0);
      schedule();
    });
  }

  // Student Placement Stories.
  function initPlacementStories() {
    const root = document.querySelector('#career');
    if (!root) return;
    const track = root.querySelector('.career-profiles-track');
    if (!track?.firstElementChild) return;
    const cards = [...track.querySelectorAll('.career-profile-card')];
    const announcement = root.querySelector('.career-profiles-announcement');
    const counter = root.querySelector('.career-slider-counter');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const updateCareerCounter = () => {
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, step, visibleCards, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
      if (announcement) {
        const startCard = Math.min(cards.length - 1, Math.round(pages[nextIndex] / step));
        announcement.textContent = `Showing internship stories from ${cards[startCard]?.querySelector('h3')?.textContent || 'students'}.`;
      }
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 3500);
    };

    root.querySelector('[data-career-previous]')?.addEventListener('click', () => {
      move(-1);
      restartTimer();
    });
    root.querySelector('[data-career-next]')?.addEventListener('click', () => {
      move(1);
      restartTimer();
    });

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', updateCareerCounter, { passive: true });
    new ResizeObserver(updateCareerCounter).observe(track);
    updateCareerCounter();
    restartTimer();
  }

  // Auto-scroll video rows while preserving manual and vertical page scrolling.
  function initStoryCarousels() {
    const section = document.querySelector('#stories');
    if (!section) return;
    const rows = [];
    let frame = null;
    let lastTime = null;
    let modalActive = false;
    const canMove = row => row.distance > 0 && row.visible && !row.hovered && !row.focused && !row.touching && !row.interacting &&
      !motionPreference.matches && !document.hidden && !modalActive &&
      !document.documentElement.classList.contains('motion-paused');
    const tick = time => {
      frame = null;
      const elapsed = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, .05);
      lastTime = time;
      rows.forEach(row => {
        if (!canMove(row)) return;
        row.position = row.distance + ((row.position - row.distance + row.speed * elapsed) % row.distance + row.distance) % row.distance;
        row.root.scrollLeft = row.position;
      });
      if (rows.some(canMove)) frame = requestAnimationFrame(tick);
      else lastTime = null;
    };
    const refresh = () => {
      rows.forEach(row => row.position = row.root.scrollLeft);
      if (rows.some(canMove)) {
        if (frame === null) frame = requestAnimationFrame(tick);
      } else {
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
        lastTime = null;
      }
    };
    section.querySelectorAll('.featured-stories, .story-thumbnails').forEach((root, index) => {
      const originals = [...root.children];
      if (!originals.length) return;
      root.classList.add('story-scroller');
      root.tabIndex = 0;
      root.setAttribute('role', 'region');
      if (!root.hasAttribute('aria-label')) root.setAttribute('aria-label', 'Featured university videos');
      const track = document.createElement('div');
      track.className = 'story-scroll-track';
      track.append(...originals);
      // Copies on either side let native swipes and dragging cross the seam.
      // Only the original buttons participate in keyboard and screen reader navigation.
      const makeCopy = (button, index) => {
        const copy = button.cloneNode(true);
        copy.dataset.storyCopy = String(index);
        copy.tabIndex = -1;
        copy.setAttribute('aria-hidden', 'true');
        copy.addEventListener('pointerdown', event => {
          if (event.pointerType === 'mouse') event.preventDefault();
        });
        return copy;
      };
      const leading = originals.map(makeCopy);
      track.prepend(...leading);
      track.append(...originals.map(makeCopy));
      root.replaceChildren(track);
      root.querySelectorAll('img').forEach(image => image.draggable = false);
      const main = originals.find(button => button.classList.contains('main-story'));
      const row = {root, position: 0, distance: 0, speed: index === 0 ? 180 : 210,
        visible: false, hovered: false, focused: false, touching: false, interacting: false};
      rows.push(row);
      let pointer = null;
      const normalize = () => {
        const left = root.scrollLeft;
        const distance = row.distance;
        if (!distance || (left >= distance - 1 && left < distance * 2)) return;
        const wrapped = distance + ((left - distance) % distance + distance) % distance;
        const shift = wrapped - left;
        row.position += shift;
        if (pointer) pointer.left += shift;
        root.scrollLeft = wrapped;
      };
      const measure = () => {
        const previous = row.distance;
        const progress = previous ? ((root.scrollLeft - previous) % previous + previous) % previous / previous : 0;
        row.distance = originals[0].getBoundingClientRect().left - leading[0].getBoundingClientRect().left;
        root.scrollLeft = previous ? row.distance * (1 + progress) : main ?
          main.offsetLeft - (root.clientWidth - main.offsetWidth) / 2 : row.distance;
        row.position = root.scrollLeft;
        normalize();
        refresh();
      };
      root.addEventListener('scroll', normalize, {passive: true});
      new ResizeObserver(measure).observe(root);
      measure();
      let resumeTimer;
      const pauseInteraction = () => {
        row.interacting = true;
        clearTimeout(resumeTimer);
        refresh();
        resumeTimer = setTimeout(() => {
          row.interacting = false;
          refresh();
        }, 1800);
      };
      new IntersectionObserver(entries => {
        row.visible = entries[0].isIntersecting;
        refresh();
      }).observe(root);
      root.addEventListener('pointerenter', event => {
        if (event.pointerType !== 'mouse') return;
        row.hovered = true;
        refresh();
      });
      root.addEventListener('pointerleave', () => {
        row.hovered = false;
        refresh();
      });
      root.addEventListener('focusin', event => {
        row.focused = event.target.matches(':focus-visible');
        refresh();
      });
      root.addEventListener('focusout', () => queueMicrotask(() => {
        row.focused = root.contains(document.activeElement) && document.activeElement.matches(':focus-visible');
        refresh();
      }));
      root.addEventListener('touchstart', () => {
        row.touching = true;
        refresh();
      }, {passive: true});
      const releaseTouch = () => {
        row.touching = false;
        pauseInteraction();
      };
      root.addEventListener('touchend', releaseTouch, {passive: true});
      root.addEventListener('touchcancel', releaseTouch, {passive: true});

      // Horizontal wheels and touchpad swipes use native scrolling. Shift also
      // lets a conventional vertical mouse wheel move across the row.
      root.addEventListener('wheel', event => {
        pauseInteraction();
        if (event.ctrlKey || !event.shiftKey || event.deltaX || !event.deltaY) return;
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? root.clientWidth : 1;
        const next = Math.max(0, Math.min(root.scrollWidth - root.clientWidth, root.scrollLeft + event.deltaY * unit));
        if (next === root.scrollLeft) return;
        event.preventDefault();
        root.scrollLeft = next;
      }, {passive: false});

      let suppressClickUntil = 0;
      root.addEventListener('pointerdown', event => {
        // Touch and pen retain native swiping, inertia, and page scrolling.
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        pointer = {id: event.pointerId, x: event.clientX, y: event.clientY, left: root.scrollLeft, dragged: false};
        row.touching = true;
        refresh();
      });
      root.addEventListener('pointermove', event => {
        if (!pointer || event.pointerId !== pointer.id) return;
        const dx = event.clientX - pointer.x;
        const dy = event.clientY - pointer.y;
        if (!pointer.dragged && (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy))) return;
        pointer.dragged = true;
        root.classList.add('is-dragging');
        if (!root.hasPointerCapture(pointer.id)) root.setPointerCapture(pointer.id);
        event.preventDefault();
        root.scrollLeft = pointer.left - dx;
      });
      const release = () => {
        if (!pointer) return;
        const {id, dragged} = pointer;
        pointer = null;
        row.touching = false;
        pauseInteraction();
        if (dragged) suppressClickUntil = performance.now() + 350;
        root.classList.remove('is-dragging');
        if (root.hasPointerCapture(id)) root.releasePointerCapture(id);
      };
      root.addEventListener('pointerup', release);
      root.addEventListener('pointercancel', release);
      root.addEventListener('lostpointercapture', release);
      window.addEventListener('pointerup', release);
      root.addEventListener('click', event => {
        if (performance.now() < suppressClickUntil) {
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        const copy = event.target.closest('[data-story-copy]');
        if (copy) {
          event.preventDefault();
          event.stopImmediatePropagation();
          originals[Number(copy.dataset.storyCopy)].click();
        }
      }, true);
      root.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        pauseInteraction();
        event.preventDefault();
        const step = originals[0].offsetWidth + parseFloat(getComputedStyle(track).gap);
        root.scrollBy({
          left: event.key === 'ArrowRight' ? step : -step,
          behavior: motionPreference.matches ? 'auto' : 'smooth'
        });
      });
    });
    motionPreference.addEventListener('change', refresh);
    document.addEventListener('visibilitychange', refresh);
    window.addEventListener('resize', refresh);
    document.addEventListener('show.bs.modal', () => {
      modalActive = true;
      refresh();
    });
    document.addEventListener('hidden.bs.modal', () => {
      modalActive = false;
      refresh();
    });
    new MutationObserver(refresh).observe(document.documentElement, {attributes: true, attributeFilter: ['class']});
  }

  // Placement Highlights.
  function initPlacementHighlights() {
    const highlight = document.querySelector('.placement-highlight');
    const packages = highlight?.querySelector('.package-grid');
    if (highlight && packages) {
      const alignBackground = () => {
        const cards = packages.getBoundingClientRect();
        const section = highlight.getBoundingClientRect();
        highlight.style.setProperty('--placement-split', `${cards.top - section.top + cards.height / 2}px`);
      };
      const observer = new ResizeObserver(alignBackground);
      observer.observe(highlight);
      observer.observe(packages);
      alignBackground();
    }
    const featured = highlight?.querySelector('[data-placement-feature]');
    const featuredCards = Array.from(document.querySelectorAll('.management-placements .law-placement-card'));
    if (featured && featuredCards.length) {
      const person = featured.querySelector('[data-placement-feature-person]');
      const logo = featured.querySelector('[data-placement-feature-logo]');
      const name = featured.querySelector('[data-placement-feature-name]');
      const role = featured.querySelector('[data-placement-feature-role]');
      const organisation = featured.querySelector('[data-placement-feature-organisation]');
      const position = featured.querySelector('[data-placement-feature-position]');
      const announcement = featured.querySelector('[data-placement-feature-announcement]');
      const readableText = element => {
        if (!element) return '';
        const copy = element.cloneNode(true);
        copy.querySelectorAll('br').forEach(lineBreak => lineBreak.replaceWith(' '));
        return copy.textContent.replace(/\s+/g, ' ').trim();
      };
      const candidateData = featuredCards.map(card => {
        const candidatePerson = card.querySelector('.placement-card-person');
        const candidateLogo = card.querySelector('.law-placement-badge img');
        return {
          name: readableText(card.querySelector('h3')),
          role: readableText(card.querySelector('.law-placement-role')),
          organisation: readableText(card.querySelector('.law-placement-organisation')),
          personSrc: candidatePerson?.getAttribute('src') || '',
          personAlt: candidatePerson?.getAttribute('alt') || '',
          logoSrc: candidateLogo?.getAttribute('src') || '',
          logoAlt: candidateLogo?.getAttribute('alt') || ''
        };
      });
      let featuredIndex = 0;
      let featuredTimer = 0;
      let featuredSwapTimer = 0;
      const renderFeatured = (nextIndex, manual = false) => {
        featuredIndex = (nextIndex + candidateData.length) % candidateData.length;
        const candidate = candidateData[featuredIndex];
        clearTimeout(featuredSwapTimer);
        featured.classList.add('is-changing');
        featuredSwapTimer = setTimeout(() => {
          person.src = candidate.personSrc;
          person.alt = candidate.personAlt;
          logo.src = candidate.logoSrc;
          logo.alt = candidate.logoAlt;
          name.textContent = candidate.name;
          role.textContent = candidate.role;
          organisation.textContent = candidate.organisation;
          position.textContent = `${featuredIndex + 1} / ${candidateData.length}`;
          if (manual) announcement.textContent = `${candidate.name}, ${candidate.role}, ${candidate.organisation}.`;
          requestAnimationFrame(() => featured.classList.remove('is-changing'));
          const following = candidateData[(featuredIndex + 1) % candidateData.length];
          if (following.personSrc) new Image().src = following.personSrc;
          if (following.logoSrc) new Image().src = following.logoSrc;
        }, motionPreference.matches ? 0 : 220);
      };
      const scheduleFeatured = () => {
        clearInterval(featuredTimer);
        if (motionPreference.matches) return;
        featuredTimer = setInterval(() => {
          if (!document.hidden && !featured.matches(':hover') && !featured.contains(document.activeElement)) {
            renderFeatured(featuredIndex + 1);
          }
        }, 4800);
      };
      featured.querySelector('[data-placement-feature-previous]')?.addEventListener('click', () => {
        renderFeatured(featuredIndex - 1, true);
        scheduleFeatured();
      });
      featured.querySelector('[data-placement-feature-next]')?.addEventListener('click', () => {
        renderFeatured(featuredIndex + 1, true);
        scheduleFeatured();
      });
      document.addEventListener('visibilitychange', scheduleFeatured);
      renderFeatured(0);
      scheduleFeatured();
    }
    const slider = document.querySelector('.management-placements');
    if (!slider || slider.hidden) return;
    const track = slider.querySelector('.placement-cards');
    if (!track?.firstElementChild) return;
    const cards = Array.from(track.querySelectorAll('.placement-card'));
    const announcement = slider.querySelector('[role="status"]');
    const counter = slider.querySelector('.placement-slider-counter');
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching || dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const updatePlacementCounter = () => {
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, step, visibleCards, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
      if (announcement) {
        const startCard = Math.min(cards.length - 1, Math.round(pages[nextIndex] / step));
        announcement.textContent = cards.slice(startCard, startCard + visibleCards)
          .map(card => card.querySelector('h3')?.textContent.trim()).filter(Boolean).join(', ');
      }
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 3500);
    };

    slider.querySelector('[data-placement-prev]')?.addEventListener('click', () => {
      move(-1);
      restartTimer();
    });
    slider.querySelector('[data-placement-next]')?.addEventListener('click', () => {
      move(1);
      restartTimer();
    });

    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        move(event.key === 'ArrowRight' ? 1 : -1);
        restartTimer();
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const { maximum } = getPages();
        track.scrollTo({
          left: event.key === 'Home' ? 0 : maximum,
          behavior: motionPreference.matches ? 'instant' : 'smooth'
        });
        restartTimer();
      }
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', updatePlacementCounter, { passive: true });
    new ResizeObserver(updatePlacementCounter).observe(track);
    updatePlacementCounter();
    restartTimer();
  }

  // Animate selected statistics once when they enter the viewport.
  function initCountUpNumbers() {
    const counters = [...document.querySelectorAll('[data-count-up]')];
    if (!counters.length || motionPreference.matches || !('IntersectionObserver' in window)) return;
    const active = new Map();

    const finish = element => {
      const animation = active.get(element);
      if (animation) {
        cancelAnimationFrame(animation.frame);
        animation.value.textContent = animation.finalText;
        active.delete(element);
      }
      element.dataset.countState = 'complete';
    };

    const start = element => {
      const finalText = element.textContent.trim();
      if (!/^\d[\d,]*(?:\.\d+)?$/.test(finalText)) return;
      const target = Number(finalText.replaceAll(',', ''));
      const decimals = finalText.split('.')[1]?.length || 0;
      const format = new Intl.NumberFormat('en-IN', {
        useGrouping: finalText.includes(','),
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
      const sizer = document.createElement('bdi');
      sizer.className = 'count-up-sizer';
      sizer.setAttribute('aria-hidden', 'true');
      sizer.textContent = finalText;
      const value = document.createElement('bdi');
      value.className = 'count-up-value';
      value.setAttribute('aria-hidden', 'true');
      value.textContent = format.format(0);
      const accessible = document.createElement('span');
      accessible.className = 'visually-hidden';
      accessible.textContent = finalText;
      element.replaceChildren(sizer, value, accessible);
      element.dataset.countState = 'running';
      const animation = { value, finalText, frame: 0 };
      active.set(element, animation);
      const duration = target < 10 ? 1900 : 2900;
      let started;
      const tick = now => {
        if (started === undefined) started = now;
        const progress = Math.min(1, (now - started) / duration);
        if (progress === 1) {
          finish(element);
          return;
        }
        const eased = 1 - Math.pow(1 - progress, 3);
        value.textContent = format.format(target * eased);
        animation.frame = requestAnimationFrame(tick);
      };
      animation.frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < .6) return;
        observer.unobserve(entry.target);
        start(entry.target);
      });
    }, { threshold: .6, rootMargin: '0px 0px -24px 0px' });
    counters.forEach(element => {
      element.dataset.countState = 'pending';
      observer.observe(element);
    });
    motionPreference.addEventListener('change', event => {
      if (!event.matches) return;
      observer.disconnect();
      counters.forEach(finish);
    });
  }

  function initAchieversHeroSlider() {
    const hero = document.querySelector('.law-achievements-hero');
    if (!hero) return;
    const slides = [...hero.querySelectorAll('.law-hero-slide')];
    const dots = [...hero.querySelectorAll('.law-hero-dot')];
    const doodleText = hero.querySelector('.law-hero-doodle-text');
    const statCards = [...document.querySelectorAll('.law-achievements-stats article')];
    if (slides.length <= 1) return;

    let currentIndex = 0;
    let timer = null;
    let isHovered = false;
    let isTouching = false;
    let inView = true;

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const active = i === currentIndex;
        slide.classList.toggle('is-active', active);
        if (active && doodleText && slide.dataset.doodle) {
          doodleText.innerHTML = slide.dataset.doodle;
        }
      });

      dots.forEach((dot, i) => {
        const active = i === currentIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      statCards.forEach((card, i) => {
        card.classList.toggle('is-active', i === currentIndex);
      });
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const startTimer = () => {
      clearInterval(timer);
      if (isHovered || isTouching || !inView || document.hidden || motionPreference?.matches) return;
      timer = setInterval(nextSlide, 2500);
    };

    const stopTimer = () => {
      clearInterval(timer);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        startTimer();
      });
    });

    statCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        goToSlide(index);
        startTimer();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToSlide(index);
          startTimer();
        }
      });
    });

    hero.addEventListener('mouseenter', () => {
      isHovered = true;
      stopTimer();
    });

    hero.addEventListener('mouseleave', () => {
      isHovered = false;
      startTimer();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    hero.addEventListener('touchstart', (e) => {
      isTouching = true;
      stopTimer();
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    hero.addEventListener('touchend', (e) => {
      isTouching = false;
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 40) {
        goToSlide(currentIndex + 1);
      } else if (touchEndX - touchStartX > 40) {
        goToSlide(currentIndex - 1);
      }
      startTimer();
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView) {
          startTimer();
        } else {
          stopTimer();
        }
      }, { threshold: 0.2 }).observe(hero);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    });

    if (motionPreference) {
      motionPreference.addEventListener('change', () => {
        if (motionPreference.matches) stopTimer();
        else startTimer();
      });
    }

    goToSlide(0);
    startTimer();
  }

  function initAchievementGallery() {
    const root = document.querySelector('#student-achievements');
    if (!root) return;
    const track = root.querySelector('.law-achievements-track');
    if (!track?.firstElementChild) return;
    const previous = root.querySelector('[data-achievement-previous]');
    const next = root.querySelector('[data-achievement-next]');
    const counter = root.querySelector('.achievement-slider-counter');
    const cards = [...track.querySelectorAll('.law-achievement-card')];
    let timer = null;
    let inView = true;
    let hovered = false;
    let focused = false;
    let touching = false;
    let touchTimer = null;

    const pauseTouch = () => {
      touching = true;
      clearTimeout(touchTimer);
      restartTimer();
      touchTimer = setTimeout(() => {
        touching = false;
        restartTimer();
      }, 2000);
    };

    const dialogOpen = () => !!document.querySelector('#story-modal.show, #story-modal[open], #mentor-dialog[open], #law-event-dialog[open]');

    const isBlocked = () =>
      document.hidden || !inView || (hovered && track.matches(':hover')) || focused || touching ||
      dialogOpen() || motionPreference.matches;

    const getPageJump = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const cardWidth = (cards[0] || track.firstElementChild)?.getBoundingClientRect().width || 300;
      const step = (cardWidth > 0 ? cardWidth : 300) + gap;
      const visibleCards = Math.max(1, Math.floor((track.clientWidth + gap) / step));
      return { step, visibleCards, pageJump: step * visibleCards };
    };

    const getPages = () => {
      const { step, visibleCards, pageJump } = getPageJump();
      const maximum = track.scrollWidth - track.clientWidth;
      if (maximum <= 2) return { pages: [0], step, visibleCards, maximum: 0 };
      const pages = [0];
      for (let left = pageJump; left < maximum - 2; left += pageJump) {
        pages.push(left);
      }
      pages.push(maximum);
      return { pages, step, visibleCards, maximum };
    };

    const update = () => {
      if (previous) previous.disabled = false;
      if (next) next.disabled = false;
      if (!counter || !cards.length) return;
      const { pages } = getPages();
      if (!pages.length) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      counter.textContent = `${current + 1} / ${pages.length}`;
    };

    const move = direction => {
      const { pages, maximum } = getPages();
      if (maximum <= 0 || pages.length <= 1) return;
      const current = pages.reduce((closest, left, index) =>
        Math.abs(left - track.scrollLeft) < Math.abs(pages[closest] - track.scrollLeft) ? index : closest, 0);
      const nextIndex = (current + direction + pages.length) % pages.length;
      track.scrollTo({
        left: pages[nextIndex],
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
      if (counter) counter.textContent = `${nextIndex + 1} / ${pages.length}`;
    };

    const restartTimer = () => {
      clearInterval(timer);
      if (isBlocked() || cards.length <= 1) return;
      timer = setInterval(() => {
        if (isBlocked()) return;
        move(1);
      }, 5500);
    };

    if (previous) {
      previous.addEventListener('click', () => {
        move(-1);
        restartTimer();
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        move(1);
        restartTimer();
      });
    }

    track.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
      restartTimer();
    });

    track.addEventListener('pointerenter', event => {
      if (event.pointerType === 'mouse') {
        hovered = true;
        restartTimer();
      }
    });
    track.addEventListener('pointerleave', event => {
      if (event.pointerType === 'mouse') {
        hovered = false;
        restartTimer();
      }
    });

    track.addEventListener('focusin', () => {
      focused = true;
      restartTimer();
    });
    track.addEventListener('focusout', () => {
      focused = track.contains(document.activeElement);
      restartTimer();
    });

    track.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') {
        pauseTouch();
      }
    }, { passive: true });
    track.addEventListener('touchstart', pauseTouch, { passive: true });
    track.addEventListener('touchend', pauseTouch, { passive: true });
    track.addEventListener('touchcancel', pauseTouch, { passive: true });

    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      restartTimer();
    }, { threshold: 0 }).observe(track);

    document.addEventListener('visibilitychange', restartTimer);
    motionPreference.addEventListener('change', restartTimer);
    document.addEventListener('shown.bs.modal', restartTimer);
    document.addEventListener('hidden.bs.modal', restartTimer);

    track.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(track);
    update();
    restartTimer();
  }

  // Initialize after the document is parsed (script is deferred).
  const safeInit = (fn) => {
    try {
      if (typeof fn === 'function') fn();
    } catch (err) {
      console.warn('Init error in ' + fn.name, err);
    }
  };

  safeInit(initResponsiveApplicationSection);
  safeInit(initApplicationForm);
  safeInit(initVideoDialog);
  safeInit(initLeaderCarousel);
  safeInit(initBackToTop);
  safeInit(initStickyAdmissionsCTA);
  safeInit(initIndustryBenefits);
  safeInit(initHeroAndRecognition);
  safeInit(initCampusGallery);
  safeInit(initFacultyProfiles);
  safeInit(initFounderStories);
  safeInit(initPlacementStories);
  safeInit(initStoryCarousels);
  safeInit(initPlacementHighlights);
  safeInit(initCountUpNumbers);
})();
