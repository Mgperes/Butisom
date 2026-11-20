const WHATSAPP_NUMBER = '5553981241499';

    // Atualiza ano no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Menu Mobile Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });

    // Animação Reveal suave no Scroll (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Modal e Redirecionamento Seguro para WhatsApp
    const modal = document.getElementById('whatsapp-modal');
    const modalMessageBox = document.getElementById('modal-message-box');
    const modalWaLink = document.getElementById('modal-wa-link');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const copyMsgBtn = document.getElementById('copy-msg-btn');
    const copyFeedback = document.getElementById('copy-feedback');

    function openDirectWhatsApp(messageText) {
      const encodedMsg = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
      
      modalMessageBox.textContent = messageText;
      modalWaLink.href = waUrl;
      copyFeedback.classList.add('hidden');
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });

    // Cópia compatível com iframes usando execCommand
    copyMsgBtn.addEventListener('click', () => {
      const tempInput = document.createElement('textarea');
      tempInput.value = modalMessageBox.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        copyFeedback.classList.remove('hidden');
      } catch (err) {
        console.error('Erro ao copiar texto:', err);
      }
      document.body.removeChild(tempInput);
    });
