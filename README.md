<p align="center">
  <img src="./docs/assets/banner.svg" alt="LAIFA banner" width="100%" />
</p>

# LAIFA

Legal & Administrative Intelligent Financial Assistant — تطبيق ويب مبني باستخدام **React + TypeScript + Vite + Tailwind CSS**.

## التوثيق (Documentation)

- [البنية المعمارية (Architecture)](./docs/ARCHITECTURE.md)
- [دليل المساهمة (Contributing)](./docs/CONTRIBUTING.md)
- [الرخصة (License)](./LICENSE) — MIT

## النشر على GitHub Pages (Deployment)

هذا مشروع **React/Vite**، أي أن ملفات `.tsx` لا يمكن للمتصفح تشغيلها مباشرة —
يجب بناؤه أولاً (`npm run build`) قبل النشر، وإلا ستظهر صفحة بيضاء فارغة.

الطريقة المُعدّة هنا جاهزة تلقائيًا عبر GitHub Actions:

1. تأكد أن إعداد **Settings → Pages → Build and deployment → Source** مضبوط على
   **GitHub Actions** (كما في لقطة الشاشة التي أرسلتها).
2. عند كل `git push` على فرع `main`، سيقوم الملف
   [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) تلقائيًا بـ:
   - تثبيت الحزم (`npm install`)
   - بناء المشروع (`npm run build`) الذي ينتج مجلد `dist/`
   - نشر محتوى `dist/` على GitHub Pages
3. الرابط `base` في `vite.config.ts` مضبوط مسبقًا على `/AIFA/` لأن الموقع سيكون
   على `https://<username>.github.io/AIFA/` (اسم مستودع فرعي وليس نطاقًا جذريًا).
   **إذا غيّرت اسم المستودع**، عدّل هذه القيمة في `vite.config.ts` لتطابق الاسم الجديد.

## المتطلبات (Requirements)

- Node.js 18 أو أحدث
- npm (أو yarn / pnpm)

## التثبيت والتشغيل محليًا (Local setup)

```bash
# تثبيت الحزم
npm install

# تشغيل بيئة التطوير (Dev server)
npm run dev

# بناء نسخة الإنتاج (Production build)
npm run build

# معاينة نسخة الإنتاج
npm run preview
```

سيعمل التطبيق افتراضيًا على `http://localhost:5173`.

## هيكلة المشروع (Project structure)

```
laifa/
├── .github/
│   └── workflows/deploy.yml  # بناء ونشر تلقائي على GitHub Pages
├── index.html              # نقطة الدخول HTML
├── src/
│   ├── main.tsx             # نقطة دخول React
│   ├── App.tsx              # تعريف المسارات (routes)
│   ├── index.css            # ملف Tailwind الرئيسي (base/components/utilities)
│   ├── vite-env.d.ts        # تعريفات أنواع Vite (import.meta.env)
│   ├── components/
│   │   └── PageLayout.tsx   # مكوّن التخطيط المشترك بين الصفحات
│   └── pages/                # صفحات التطبيق (كل صفحة = مسار)
│       ├── AIFA.tsx
│       ├── LegalTexts.tsx
│       ├── JudicialPrecedent.tsx
│       ├── Reports.tsx
│       ├── AdministrativeStudies.tsx
│       ├── FinancialStudies.tsx
│       ├── News.tsx
│       └── Login.tsx
├── public/
│   ├── logo.svg              # الشعار الكامل (أيقونة + اسم)
│   ├── logo-icon.svg         # أيقونة الشعار فقط (هيدر/فوتر)
│   └── favicon.svg           # أيقونة المتصفح
├── docs/
│   ├── ARCHITECTURE.md
│   ├── CONTRIBUTING.md
│   └── assets/banner.svg
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

> ملاحظة: هذا المشروع **لا يستخدم ملفات CSS/JS منفصلة تقليدية**. التنسيق يتم عبر Tailwind CSS مباشرة داخل ملفات `.tsx`، وملف `src/index.css` هو الملف الوحيد اللازم لتفعيل Tailwind.

## التقنيات المستخدمة (Tech stack)

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Wouter](https://github.com/molefrog/wouter) — التوجيه (routing)
- [Framer Motion](https://www.framer.com/motion/) — الحركات (animations)
- [Lucide React](https://lucide.dev/) — الأيقونات

## جودة الكود (Code quality)

```bash
npm run lint          # فحص ESLint
npm run format        # تنسيق تلقائي عبر Prettier
npm run type-check    # فحص الأنواع (tsc --noEmit) بدون بناء
```

## الرخصة (License)

هذا المشروع مرخّص برخصة [MIT](./LICENSE).
