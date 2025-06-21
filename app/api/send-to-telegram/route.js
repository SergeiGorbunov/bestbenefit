// src/components/OrderForm.jsx
// src/app/api/send-to-telegram/route.js
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // Получаем данные из запроса
    const { message } = await request.json();
    
    // Настройки Telegram
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Не настроены переменные окружения для Telegram');
    }
    
    // Формируем URL для отправки сообщения
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    // Отправляем сообщение в Telegram
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      }),
    });
    
    const responseData = await response.json();
    
    if (!response.ok || !responseData.ok) {
      const errorMessage = responseData.description || 'Ошибка при отправке в Telegram';
      throw new Error(errorMessage);
    }
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Сообщение успешно отправлено в Telegram'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}