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

    // Lógica do Simulador Interativo de Pré-Orçamento
    let selectedDevice = 'TV Smart / LED / 4K';
    let selectedIssue = 'Tem som, mas a tela ficou escura / sem imagem';

    const deviceBtns = document.querySelectorAll('.device-btn');
    const issueBtns = document.querySelectorAll('.issue-btn');
    const brandInput = document.getElementById('brand-input');
    const previewEl = document.getElementById('whatsapp-preview');
    const sendWhatsappBtn = document.getElementById('send-whatsapp-btn');

    function buildEstimateMessage() {
      const brandText = brandInput.value.trim();
      const brandPart = brandText ? ` (${brandText})` : '';
      return `Olá, Butisom Eletrônica! Gostaria de um orçamento para conserto de ${selectedDevice}${brandPart}. Defeito: ${selectedIssue}.`;
    }

    function updatePreview() {
      previewEl.textContent = `"${buildEstimateMessage()}"`;
    }

    deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        deviceBtns.forEach(b => {
          b.classList.remove('bg-white', 'text-[#1D1D1F]', 'border-white');
          b.classList.add('bg-white/5', 'text-white/80', 'border-white/15');
        });
        btn.classList.remove('bg-white/5', 'text-white/80', 'border-white/15');
        btn.classList.add('bg-white', 'text-[#1D1D1F]', 'border-white');
        selectedDevice = btn.getAttribute('data-device');
        updatePreview();
      });
    });

    issueBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        issueBtns.forEach(b => {
          b.classList.remove('bg-white', 'text-[#1D1D1F]', 'border-white');
          b.classList.add('bg-white/5', 'text-white/80', 'border-white/15');
        });
        btn.classList.remove('bg-white/5', 'text-white/80', 'border-white/15');
        btn.classList.add('bg-white', 'text-[#1D1D1F]', 'border-white');
        selectedIssue = btn.getAttribute('data-issue');
        updatePreview();
      });
    });

    brandInput.addEventListener('input', updatePreview);

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

    sendWhatsappBtn.addEventListener('click', () => {
      openDirectWhatsApp(buildEstimateMessage());
    });

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
