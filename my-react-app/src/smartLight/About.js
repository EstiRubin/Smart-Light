import React from 'react';
import "../css/About.css";
const About = () => {
  return (
    <div className="about-container bg-white text-black border border-black p-8 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center border-b border-black pb-4 mb-6">אודות חברת SMART LIGHT</h1>
      <p className="text-lg text-center mb-4">
        ברוכים הבאים ל-SMART LIGHT – הבחירה הנבונה לעיצוב התאורה שלכם!
      </p>
      <p className="text-md text-gray-700 leading-7 mb-6">
        חברת SMART LIGHT, בבעלות חנה איינורן, מתמחה בייעוץ תאורה מקצועי וברכישת גופי תאורה בהתאמה אישית לכל חלל ומטרה.
        אנו מביאים ניסיון, ידע ואהבה לעולם התאורה, מתוך מחויבות ליצור עבורכם סביבה מוארת ונעימה שמשדרגת את איכות החיים שלכם.
      </p>
      <h2 className="text-2xl font-semibold border-b border-black pb-2 mb-4">החזון שלנו</h2>
      <p className="text-md text-gray-700 leading-7 mb-6">
        אנו ב-SMART LIGHT מאמינים שלתאורה יש תפקיד מרכזי בעיצוב חללים ובהשפעה על האווירה שבהם.
        לכן, אנו פועלים במקצועיות ובמסירות כדי להעניק לכם פתרונות תאורה מתקדמים המותאמים בדיוק לצרכים שלכם,
        תוך דגש על עיצוב ייחודי, פרקטיות, וחיסכון באנרגיה.
      </p>
      <h2 className="text-2xl font-semibold border-b border-black pb-2 mb-4">מה מייחד אותנו?</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><strong>ייעוץ אישי ומקצועי:</strong> כל לקוח מקבל ליווי צמוד משלב הרעיון ועד להשלמת הפרויקט, עם התחשבות מלאה בסגנון, בתקציב ובדרישות הייחודיות שלו.</li>
        <li><strong>מבחר איכותי של גופי תאורה:</strong> אנו מציעים מגוון רחב של גופי תאורה מודרניים, קלאסיים וטכנולוגיים, המתאימים לבית, למשרד ולשטחים מסחריים.</li>
        <li><strong>תשומת לב לפרטים:</strong> אנו שמים דגש על עיצוב הרמוני ואסתטי, המשלב פונקציונליות ונוחות.</li>
        <li><strong>שירות בסטנדרטים גבוהים:</strong> אצלנו, שביעות רצונכם היא בראש סדר העדיפויות.</li>
      </ul>
      <p className="text-md text-gray-700 leading-7 mt-6">
        בואו להאיר את עולמכם עם SMART LIGHT, המקום שבו תאורה הופכת לאמנות. נשמח לעמוד לשירותכם ולהאיר עבורכם את הדרך!
      </p>
    </div>
  );
};

export default About;
