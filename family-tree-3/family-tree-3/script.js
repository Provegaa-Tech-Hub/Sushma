let nextId = 15; // Counter for generating unique IDs
let currentParentId = null;
let editingPersonId = null;
let isEditMode = false;
let isSpouseMode = false;
let currentPhotoData = null;
let currentCustomizePersonId = null;
let sidebarHidden = false;
let uploadedPhotos = []; // Store uploaded photos
let photoShapeDefault = 'circle'; // Default photo shape
let currentOpenMenu = null; // Track currently open card menu
let currentLanguage = 'en'; // Current language
let globalShowPhotos = true; // Global setting for showing/hiding photos
let currentTextElement = null; // Track currently selected text element for font menu
let currentFontPersonId = null; // Track person ID for font changes

// Translation object
const translations = {
    en: {
        familyTreeTemplate: "Family Tree",
        addText: "Add Text",
        drawConnector: "Draw Connector",
        addLink: "Add Link",
        alignObjects: "Align Objects",
        comments: "Comments",
        emoji: "Emoji",
        moreOptions: "More Options",
        export: "Export",
        share: "Share",
        shapes: "Shapes",
        assets: "Assets",
        stickers: "Stickers",
        cardShapes: "Card Shapes",
        rectangle: "Rectangle",
        rounded: "Rounded",
        circle: "Circle",
        hexagon: "Hexagon",
        apple: "Apple",
        sunflower: "Sunflower",
        rose: "Rose",
        photoShapes: "Photo Shapes",
        clickShapeToAdd: "Click a shape to add a new family member, or select a person and change shape in Properties panel.",
        addNewFamilyMember: "Add New Family Member",
        editPersonInfo: "Edit Person Information",
        addSpouse: "Add Spouse",
        name: "Name",
        gender: "Gender",
        selectGender: "Select Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        dates: "Dates",
        datesPlaceholder: "e.g., 1990-Present",
        occupation: "Occupation",
        occupationPlaceholder: "e.g., Engineer, Teacher",
        photo: "Photo",
        addPerson: "Add Person",
        updatePerson: "Update Person",
        cancel: "Cancel",
        properties: "Properties",
        clickToEdit: "Click on any object to edit its properties",
        basicInfo: "BASIC INFO",
        photoShape: "PHOTO SHAPE",
        shape: "SHAPE",
        colors: "COLORS",
        fill: "Fill",
        border: "Border",
        text: "Text",
        link: "LINK",
        addLinkBtn: "Add Link",
        updateLink: "Update Link",
        removeLink: "Remove Link",
        uploadPhoto: "Upload Photo",
        changePhoto: "Change Photo",
        removePhoto: "Remove Photo",
        resetAllStyles: "Reset All Styles",
        editInfo: "Edit Info",
        addChild: "Add Child",
        remove: "Remove",
        removeSpouse: "Remove Spouse",
        exportSuccess: "Family tree exported successfully!",
        exportError: "Error exporting. Please try again.",
        cannotRemoveRoot: "Cannot remove the root ancestor of the family tree",
        personNotFound: "Person not found",
        fillRequired: "Please fill in Name and Gender (required fields)",
        alreadyHasSpouse: "This person already has a spouse. Please remove the existing spouse first."
    },
    es: {
        familyTreeTemplate: "Plantilla de Árbol Genealógico",
        addText: "Agregar Texto",
        drawConnector: "Dibujar Conector",
        addLink: "Agregar Enlace",
        alignObjects: "Alinear Objetos",
        comments: "Comentarios",
        emoji: "Emoji",
        moreOptions: "Más Opciones",
        export: "Exportar",
        share: "Compartir",
        shapes: "Formas",
        assets: "Recursos",
        stickers: "Pegatinas",
        cardShapes: "Formas de Tarjetas",
        rectangle: "Rectángulo",
        rounded: "Redondeado",
        circle: "Círculo",
        hexagon: "Hexágono",
        apple: "Manzana",
        sunflower: "Girasol",
        rose: "Rosa",
        photoShapes: "Formas de Foto",
        clickShapeToAdd: "Haga clic en una forma para agregar un nuevo miembro familiar, o seleccione una persona y cambie la forma en el panel de Propiedades.",
        addNewFamilyMember: "Agregar Nuevo Miembro Familiar",
        editPersonInfo: "Editar Información de Persona",
        addSpouse: "Agregar Cónyuge",
        name: "Nombre",
        gender: "Género",
        selectGender: "Seleccionar Género",
        male: "Masculino",
        female: "Femenino",
        other: "Otro",
        dates: "Fechas",
        datesPlaceholder: "ej., 1990-Presente",
        occupation: "Ocupación",
        occupationPlaceholder: "ej., Ingeniero, Maestro",
        photo: "Foto",
        addPerson: "Agregar Persona",
        updatePerson: "Actualizar Persona",
        cancel: "Cancelar",
        properties: "Propiedades",
        clickToEdit: "Haga clic en cualquier objeto para editar sus propiedades",
        basicInfo: "INFORMACIÓN BÁSICA",
        photoShape: "FORMA DE FOTO",
        shape: "FORMA",
        colors: "COLORES",
        fill: "Relleno",
        border: "Borde",
        text: "Texto",
        link: "ENLACE",
        addLinkBtn: "Agregar Enlace",
        updateLink: "Actualizar Enlace",
        removeLink: "Eliminar Enlace",
        uploadPhoto: "Subir Foto",
        changePhoto: "Cambiar Foto",
        removePhoto: "Eliminar Foto",
        resetAllStyles: "Restablecer Todos los Estilos",
        editInfo: "Editar Info",
        addChild: "Agregar Hijo",
        remove: "Eliminar",
        removeSpouse: "Eliminar Cónyuge",
        exportSuccess: "¡Árbol genealógico exportado exitosamente!",
        exportError: "Error al exportar. Por favor, inténtelo de nuevo.",
        cannotRemoveRoot: "No se puede eliminar el ancestro raíz del árbol genealógico",
        personNotFound: "Persona no encontrada",
        fillRequired: "Por favor complete Nombre y Género (campos obligatorios)",
        alreadyHasSpouse: "Esta persona ya tiene cónyuge. Por favor elimine el cónyuge existente primero."
    },
    fr: {
        familyTreeTemplate: "Modèle d'Arbre Généalogique",
        addText: "Ajouter du Texte",
        drawConnector: "Dessiner Connecteur",
        addLink: "Ajouter un Lien",
        alignObjects: "Aligner les Objets",
        comments: "Commentaires",
        emoji: "Emoji",
        moreOptions: "Plus d'Options",
        export: "Exporter",
        share: "Partager",
        shapes: "Formes",
        assets: "Ressources",
        stickers: "Autocollants",
        cardShapes: "Formes de Carte",
        rectangle: "Rectangle",
        rounded: "Arrondi",
        circle: "Cercle",
        hexagon: "Hexagone",
        apple: "Pomme",
        sunflower: "Tournesol",
        rose: "Rose",
        photoShapes: "Formes de Photo",
        clickShapeToAdd: "Cliquez sur une forme pour ajouter un nouveau membre de la famille, ou sélectionnez une personne et changez la forme dans le panneau Propriétés.",
        addNewFamilyMember: "Ajouter un Nouveau Membre de la Famille",
        editPersonInfo: "Modifier les Informations de la Personne",
        addSpouse: "Ajouter un Conjoint",
        name: "Nom",
        gender: "Genre",
        selectGender: "Sélectionner le Genre",
        male: "Masculin",
        female: "Féminin",
        other: "Autre",
        dates: "Dates",
        datesPlaceholder: "ex., 1990-Présent",
        occupation: "Profession",
        occupationPlaceholder: "ex., Ingénieur, Enseignant",
        photo: "Photo",
        addPerson: "Ajouter une Personne",
        updatePerson: "Mettre à Jour la Personne",
        cancel: "Annuler",
        properties: "Propriétés",
        clickToEdit: "Cliquez sur n'importe quel objet pour modifier ses propriétés",
        basicInfo: "INFORMATIONS DE BASE",
        photoShape: "FORME DE PHOTO",
        shape: "FORME",
        colors: "COULEURS",
        fill: "Remplissage",
        border: "Bordure",
        text: "Texte",
        link: "LIEN",
        addLinkBtn: "Ajouter un Lien",
        updateLink: "Mettre à Jour le Lien",
        removeLink: "Supprimer le Lien",
        uploadPhoto: "Télécharger une Photo",
        changePhoto: "Changer la Photo",
        removePhoto: "Supprimer la Photo",
        resetAllStyles: "Réinitialiser Tous les Styles",
        editInfo: "Modifier Info",
        addChild: "Ajouter un Enfant",
        remove: "Supprimer",
        removeSpouse: "Supprimer le Conjoint",
        exportSuccess: "Arbre généalogique exporté avec succès!",
        exportError: "Erreur lors de l'exportation. Veuillez réessayer.",
        cannotRemoveRoot: "Impossible de supprimer l'ancêtre racine de l'arbre généalogique",
        personNotFound: "Personne non trouvée",
        fillRequired: "Veuillez remplir le Nom et le Genre (champs obligatoires)",
        alreadyHasSpouse: "Cette personne a déjà un conjoint. Veuillez d'abord supprimer le conjoint existant."
    },
    de: {
        familyTreeTemplate: "Stammbaum Vorlage",
        addText: "Text Hinzufügen",
        drawConnector: "Verbindung Zeichnen",
        addLink: "Link Hinzufügen",
        alignObjects: "Objekte Ausrichten",
        comments: "Kommentare",
        emoji: "Emoji",
        moreOptions: "Weitere Optionen",
        export: "Exportieren",
        share: "Teilen",
        shapes: "Formen",
        assets: "Assets",
        stickers: "Aufkleber",
        cardShapes: "Kartenformen",
        rectangle: "Rechteck",
        rounded: "Abgerundet",
        circle: "Kreis",
        hexagon: "Sechseck",
        apple: "Apfel",
        sunflower: "Sonnenblume",
        rose: "Rose",
        photoShapes: "Fotoformen",
        clickShapeToAdd: "Klicken Sie auf eine Form, um ein neues Familienmitglied hinzuzufügen, oder wählen Sie eine Person aus und ändern Sie die Form im Eigenschaftenpanel.",
        addNewFamilyMember: "Neues Familienmitglied Hinzufügen",
        editPersonInfo: "Personeninformationen Bearbeiten",
        addSpouse: "Ehepartner Hinzufügen",
        name: "Name",
        gender: "Geschlecht",
        selectGender: "Geschlecht Auswählen",
        male: "Männlich",
        female: "Weiblich",
        other: "Andere",
        dates: "Daten",
        datesPlaceholder: "z.B., 1990-Gegenwart",
        occupation: "Beruf",
        occupationPlaceholder: "z.B., Ingenieur, Lehrer",
        photo: "Foto",
        addPerson: "Person Hinzufügen",
        updatePerson: "Person Aktualisieren",
        cancel: "Abbrechen",
        properties: "Eigenschaften",
        clickToEdit: "Klicken Sie auf ein beliebiges Objekt, um seine Eigenschaften zu bearbeiten",
        basicInfo: "GRUNDINFORMATIONEN",
        photoShape: "FOTOFORM",
        shape: "FORM",
        colors: "FARBEN",
        fill: "Füllung",
        border: "Rand",
        text: "Text",
        link: "LINK",
        addLinkBtn: "Link Hinzufügen",
        updateLink: "Link Aktualisieren",
        removeLink: "Link Entfernen",
        uploadPhoto: "Foto Hochladen",
        changePhoto: "Foto Ändern",
        removePhoto: "Foto Entfernen",
        resetAllStyles: "Alle Stile Zurücksetzen",
        editInfo: "Info Bearbeiten",
        addChild: "Kind Hinzufügen",
        remove: "Entfernen",
        removeSpouse: "Ehepartner Entfernen",
        exportSuccess: "Stammbaum erfolgreich exportiert!",
        exportError: "Fehler beim Exportieren. Bitte versuchen Sie es erneut.",
        cannotRemoveRoot: "Der Wurzelvorfahr des Stammbaums kann nicht entfernt werden",
        personNotFound: "Person nicht gefunden",
        fillRequired: "Bitte füllen Sie Name und Geschlecht aus (Pflichtfelder)",
        alreadyHasSpouse: "Diese Person hat bereits einen Ehepartner. Bitte entfernen Sie zuerst den vorhandenen Ehepartner."
    },
    zh: {
        familyTreeTemplate: "家谱模板",
        addText: "添加文本",
        drawConnector: "绘制连接线",
        addLink: "添加链接",
        alignObjects: "对齐对象",
        comments: "评论",
        emoji: "表情符号",
        moreOptions: "更多选项",
        export: "导出",
        share: "分享",
        shapes: "形状",
        assets: "资源",
        stickers: "贴纸",
        cardShapes: "卡片形状",
        rectangle: "矩形",
        rounded: "圆角",
        circle: "圆形",
        hexagon: "六边形",
        apple: "苹果",
        sunflower: "向日葵",
        rose: "玫瑰",
        photoShapes: "照片形状",
        clickShapeToAdd: "点击形状添加新家庭成员，或选择一个人并在属性面板中更改形状。",
        addNewFamilyMember: "添加新家庭成员",
        editPersonInfo: "编辑个人信息",
        addSpouse: "添加配偶",
        name: "姓名",
        gender: "性别",
        selectGender: "选择性别",
        male: "男性",
        female: "女性",
        other: "其他",
        dates: "日期",
        datesPlaceholder: "例如：1990-至今",
        occupation: "职业",
        occupationPlaceholder: "例如：工程师、教师",
        photo: "照片",
        addPerson: "添加人员",
        updatePerson: "更新人员",
        cancel: "取消",
        properties: "属性",
        clickToEdit: "点击任何对象以编辑其属性",
        basicInfo: "基本信息",
        photoShape: "照片形状",
        shape: "形状",
        colors: "颜色",
        fill: "填充",
        border: "边框",
        text: "文本",
        link: "链接",
        addLinkBtn: "添加链接",
        updateLink: "更新链接",
        removeLink: "删除链接",
        uploadPhoto: "上传照片",
        changePhoto: "更改照片",
        removePhoto: "删除照片",
        resetAllStyles: "重置所有样式",
        editInfo: "编辑信息",
        addChild: "添加子女",
        remove: "删除",
        removeSpouse: "删除配偶",
        exportSuccess: "家谱导出成功！",
        exportError: "导出错误。请重试。",
        cannotRemoveRoot: "无法删除家谱的根祖先",
        personNotFound: "未找到人员",
        fillRequired: "请填写姓名和性别（必填字段）",
        alreadyHasSpouse: "此人已有配偶。请先删除现有配偶。"
    },
    ja: {
        familyTreeTemplate: "家系図テンプレート",
        addText: "テキストを追加",
        drawConnector: "コネクタを描く",
        addLink: "リンクを追加",
        alignObjects: "オブジェクトを整列",
        comments: "コメント",
        emoji: "絵文字",
        moreOptions: "その他のオプション",
        export: "エクスポート",
        share: "共有",
        shapes: "図形",
        assets: "アセット",
        stickers: "ステッカー",
        cardShapes: "カード図形",
        rectangle: "長方形",
        rounded: "角丸",
        circle: "円形",
        hexagon: "六角形",
        apple: "りんご",
        sunflower: "ひまわり",
        rose: "バラ",
        photoShapes: "写真図形",
        clickShapeToAdd: "図形をクリックして新しい家族を追加するか、人物を選択してプロパティパネルで図形を変更します。",
        addNewFamilyMember: "新しい家族を追加",
        editPersonInfo: "個人情報を編集",
        addSpouse: "配偶者を追加",
        name: "名前",
        gender: "性別",
        selectGender: "性別を選択",
        male: "男性",
        female: "女性",
        other: "その他",
        dates: "日付",
        datesPlaceholder: "例：1990年-現在",
        occupation: "職業",
        occupationPlaceholder: "例：エンジニア、教師",
        photo: "写真",
        addPerson: "人物を追加",
        updatePerson: "人物を更新",
        cancel: "キャンセル",
        properties: "プロパティ",
        clickToEdit: "オブジェクトをクリックしてプロパティを編集",
        basicInfo: "基本情報",
        photoShape: "写真図形",
        shape: "図形",
        colors: "色",
        fill: "塗りつぶし",
        border: "境界線",
        text: "テキスト",
        link: "リンク",
        addLinkBtn: "リンクを追加",
        updateLink: "リンクを更新",
        removeLink: "リンクを削除",
        uploadPhoto: "写真をアップロード",
        changePhoto: "写真を変更",
        removePhoto: "写真を削除",
        resetAllStyles: "すべてのスタイルをリセット",
        editInfo: "情報を編集",
        addChild: "子供を追加",
        remove: "削除",
        removeSpouse: "配偶者を削除",
        exportSuccess: "家系図のエクスポートに成功しました！",
        exportError: "エクスポートエラー。もう一度お試しください。",
        cannotRemoveRoot: "家系図のルート祖先を削除できません",
        personNotFound: "人物が見つかりません",
        fillRequired: "名前と性別を入力してください（必須フィールド）",
        alreadyHasSpouse: "この人物にはすでに配偶者がいます。まず既存の配偶者を削除してください。"
    },
    ar: {
        familyTreeTemplate: "قالب شجرة العائلة",
        addText: "إضافة نص",
        drawConnector: "رسم موصل",
        addLink: "إضافة رابط",
        alignObjects: "محاذاة الكائنات",
        comments: "التعليقات",
        emoji: "رموز تعبيرية",
        moreOptions: "المزيد من الخيارات",
        export: "تصدير",
        share: "مشاركة",
        shapes: "الأشكال",
        assets: "الأصول",
        stickers: "الملصقات",
        cardShapes: "أشكال البطاقات",
        rectangle: "مستطيل",
        rounded: "مستدير",
        circle: "دائرة",
        hexagon: "سداسي",
        apple: "تفاحة",
        sunflower: "دوار الشمس",
        rose: "وردة",
        photoShapes: "أشكال الصور",
        clickShapeToAdd: "انقر على شكل لإضافة عضو جديد في العائلة، أو حدد شخصًا وقم بتغيير الشكل في لوحة الخصائص.",
        addNewFamilyMember: "إضافة عضو عائلة جديد",
        editPersonInfo: "تحرير معلومات الشخص",
        addSpouse: "إضافة زوج/زوجة",
        name: "الاسم",
        gender: "الجنس",
        selectGender: "اختر الجنس",
        male: "ذكر",
        female: "أنثى",
        other: "آخر",
        dates: "التواريخ",
        datesPlaceholder: "مثال: 1990-الحاضر",
        occupation: "المهنة",
        occupationPlaceholder: "مثال: مهندس، معلم",
        photo: "الصورة",
        addPerson: "إضافة شخص",
        updatePerson: "تحديث الشخص",
        cancel: "إلغاء",
        properties: "الخصائص",
        clickToEdit: "انقر على أي كائن لتحرير خصائصه",
        basicInfo: "المعلومات الأساسية",
        photoShape: "شكل الصورة",
        shape: "الشكل",
        colors: "الألوان",
        fill: "التعبئة",
        border: "الحدود",
        text: "النص",
        link: "الرابط",
        addLinkBtn: "إضافة رابط",
        updateLink: "تحديث الرابط",
        removeLink: "إزالة الرابط",
        uploadPhoto: "رفع صورة",
        changePhoto: "تغيير الصورة",
        removePhoto: "إزالة الصورة",
        resetAllStyles: "إعادة تعيين جميع الأنماط",
        editInfo: "تحرير المعلومات",
        addChild: "إضافة طفل",
        remove: "إزالة",
        removeSpouse: "إزالة الزوج/الزوجة",
        exportSuccess: "تم تصدير شجرة العائلة بنجاح!",
        exportError: "خطأ في التصدير. يرجى المحاولة مرة أخرى.",
        cannotRemoveRoot: "لا يمكن إزالة الجد الجذر من شجرة العائلة",
        personNotFound: "لم يتم العثور على الشخص",
        fillRequired: "يرجى ملء الاسم والجنس (حقول مطلوبة)",
        alreadyHasSpouse: "لدى هذا الشخص زوج/زوجة بالفعل. يرجى إزالة الزوج/الزوجة الحالي أولاً."
    },
    hi: {
        familyTreeTemplate: "पारिवारिक वृक्ष टेम्पलेट",
        addText: "पाठ जोड़ें",
        drawConnector: "कनेक्टर बनाएं",
        addLink: "लिंक जोड़ें",
        alignObjects: "वस्तुओं को संरेखित करें",
        comments: "टिप्पणियां",
        emoji: "इमोजी",
        moreOptions: "अधिक विकल्प",
        export: "निर्यात करें",
        share: "साझा करें",
        shapes: "आकार",
        assets: "संपत्ति",
        stickers: "स्टिकर",
        cardShapes: "कार्ड आकार",
        rectangle: "आयत",
        rounded: "गोलाकार",
        circle: "वृत्त",
        hexagon: "षट्भुज",
        apple: "सेब",
        sunflower: "सूरजमुखी",
        rose: "गुलाब",
        photoShapes: "फ़ोटो आकार",
        clickShapeToAdd: "नया परिवार सदस्य जोड़ने के लिए एक आकार पर क्लिक करें, या किसी व्यक्ति का चयन करें और गुण पैनल में आकार बदलें।",
        addNewFamilyMember: "नया परिवार सदस्य जोड़ें",
        editPersonInfo: "व्यक्ति की जानकारी संपादित करें",
        addSpouse: "जीवनसाथी जोड़ें",
        name: "नाम",
        gender: "लिंग",
        selectGender: "लिंग चुनें",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        dates: "तिथियां",
        datesPlaceholder: "उदा., 1990-वर्तमान",
        occupation: "व्यवसाय",
        occupationPlaceholder: "उदा., इंजीनियर, शिक्षक",
        photo: "फ़ोटो",
        addPerson: "व्यक्ति जोड़ें",
        updatePerson: "व्यक्ति अपडेट करें",
        cancel: "रद्द करें",
        properties: "गुण",
        clickToEdit: "इसके गुणों को संपादित करने के लिए किसी भी वस्तु पर क्लिक करें",
        basicInfo: "बुनियादी जानकारी",
        photoShape: "फ़ोटो आकार",
        shape: "आकार",
        colors: "रंग",
        fill: "भरें",
        border: "सीमा",
        text: "पाठ",
        link: "लिंक",
        addLinkBtn: "लिंक जोड़ें",
        updateLink: "लिंक अपडेट करें",
        removeLink: "लिंक हटाएं",
        uploadPhoto: "फ़ोटो अपलोड करें",
        changePhoto: "फ़ोटो बदलें",
        removePhoto: "फ़ोटो हटाएं",
        resetAllStyles: "सभी शैलियों को रीसेट करें",
        editInfo: "जानकारी संपादित करें",
        addChild: "बच्चा जोड़ें",
        remove: "हटाएं",
        removeSpouse: "जीवनसाथी हटाएं",
        exportSuccess: "पारिवारिक वृक्ष सफलतापूर्वक निर्यात किया गया!",
        exportError: "निर्यात त्रुटि। कृपया पुनः प्रयास करें।",
        cannotRemoveRoot: "पारिवारिक वृक्ष के मूल पूर्वज को हटाया नहीं जा सकता",
        personNotFound: "व्यक्ति नहीं मिला",
        fillRequired: "कृपया नाम और लिंग भरें (आवश्यक फ़ील्ड)",
        alreadyHasSpouse: "इस व्यक्ति का पहले से एक जीवनसाथी है। कृपया पहले मौजूदा जीवनसाथी को हटाएं।"
    },
    pt: {
        familyTreeTemplate: "Modelo de Árvore Genealógica",
        addText: "Adicionar Texto",
        drawConnector: "Desenhar Conector",
        addLink: "Adicionar Link",
        alignObjects: "Alinhar Objetos",
        comments: "Comentários",
        emoji: "Emoji",
        moreOptions: "Mais Opções",
        export: "Exportar",
        share: "Compartilhar",
        shapes: "Formas",
        assets: "Recursos",
        stickers: "Adesivos",
        cardShapes: "Formas de Cartão",
        rectangle: "Retângulo",
        rounded: "Arredondado",
        circle: "Círculo",
        hexagon: "Hexágono",
        apple: "Maçã",
        sunflower: "Girassol",
        rose: "Rosa",
        photoShapes: "Formas de Foto",
        clickShapeToAdd: "Clique em uma forma para adicionar um novo membro da família ou selecione uma pessoa e altere a forma no painel Propriedades.",
        addNewFamilyMember: "Adicionar Novo Membro da Família",
        editPersonInfo: "Editar Informações da Pessoa",
        addSpouse: "Adicionar Cônjuge",
        name: "Nome",
        gender: "Gênero",
        selectGender: "Selecionar Gênero",
        male: "Masculino",
        female: "Feminino",
        other: "Outro",
        dates: "Datas",
        datesPlaceholder: "ex., 1990-Presente",
        occupation: "Ocupação",
        occupationPlaceholder: "ex., Engenheiro, Professor",
        photo: "Foto",
        addPerson: "Adicionar Pessoa",
        updatePerson: "Atualizar Pessoa",
        cancel: "Cancelar",
        properties: "Propriedades",
        clickToEdit: "Clique em qualquer objeto para editar suas propriedades",
        basicInfo: "INFORMAÇÕES BÁSICAS",
        photoShape: "FORMA DA FOTO",
        shape: "FORMA",
        colors: "CORES",
        fill: "Preenchimento",
        border: "Borda",
        text: "Texto",
        link: "LINK",
        addLinkBtn: "Adicionar Link",
        updateLink: "Atualizar Link",
        removeLink: "Remover Link",
        uploadPhoto: "Carregar Foto",
        changePhoto: "Alterar Foto",
        removePhoto: "Remover Foto",
        resetAllStyles: "Redefinir Todos os Estilos",
        editInfo: "Editar Info",
        addChild: "Adicionar Filho",
        remove: "Remover",
        removeSpouse: "Remover Cônjuge",
        exportSuccess: "Árvore genealógica exportada com sucesso!",
        exportError: "Erro ao exportar. Por favor, tente novamente.",
        cannotRemoveRoot: "Não é possível remover o ancestral raiz da árvore genealógica",
        personNotFound: "Pessoa não encontrada",
        fillRequired: "Por favor, preencha Nome e Gênero (campos obrigatórios)",
        alreadyHasSpouse: "Esta pessoa já tem um cônjuge. Por favor, remova o cônjuge existente primeiro."
    },
    ru: {
        familyTreeTemplate: "Шаблон Семейного Древа",
        addText: "Добавить Текст",
        drawConnector: "Нарисовать Соединитель",
        addLink: "Добавить Ссылку",
        alignObjects: "Выровнять Объекты",
        comments: "Комментарии",
        emoji: "Эмодзи",
        moreOptions: "Дополнительные Опции",
        export: "Экспорт",
        share: "Поделиться",
        shapes: "Формы",
        assets: "Ресурсы",
        stickers: "Стикеры",
        cardShapes: "Формы Карточек",
        rectangle: "Прямоугольник",
        rounded: "Закругленный",
        circle: "Круг",
        hexagon: "Шестиугольник",
        apple: "Яблоко",
        sunflower: "Подсолнух",
        rose: "Роза",
        photoShapes: "Формы Фото",
        clickShapeToAdd: "Нажмите на форму, чтобы добавить нового члена семьи, или выберите человека и измените форму на панели Свойства.",
        addNewFamilyMember: "Добавить Нового Члена Семьи",
        editPersonInfo: "Редактировать Информацию о Человеке",
        addSpouse: "Добавить Супруга",
        name: "Имя",
        gender: "Пол",
        selectGender: "Выберите Пол",
        male: "Мужской",
        female: "Женский",
        other: "Другой",
        dates: "Даты",
        datesPlaceholder: "напр., 1990-Настоящее",
        occupation: "Профессия",
        occupationPlaceholder: "напр., Инженер, Учитель",
        photo: "Фото",
        addPerson: "Добавить Человека",
        updatePerson: "Обновить Человека",
        cancel: "Отмена",
        properties: "Свойства",
        clickToEdit: "Нажмите на любой объект, чтобы изменить его свойства",
        basicInfo: "ОСНОВНАЯ ИНФОРМАЦИЯ",
        photoShape: "ФОРМА ФОТО",
        shape: "ФОРМА",
        colors: "ЦВЕТА",
        fill: "Заливка",
        border: "Граница",
        text: "Текст",
        link: "ССЫЛКА",
        addLinkBtn: "Добавить Ссылку",
        updateLink: "Обновить Ссылку",
        removeLink: "Удалить Ссылку",
        uploadPhoto: "Загрузить Фото",
        changePhoto: "Изменить Фото",
        removePhoto: "Удалить Фото",
        resetAllStyles: "Сбросить Все Стили",
        editInfo: "Редактировать Инфо",
        addChild: "Добавить Ребенка",
        remove: "Удалить",
        removeSpouse: "Удалить Супруга",
        exportSuccess: "Семейное древо успешно экспортировано!",
        exportError: "Ошибка экспорта. Пожалуйста, попробуйте снова.",
        cannotRemoveRoot: "Невозможно удалить корневого предка из семейного древа",
        personNotFound: "Человек не найден",
        fillRequired: "Пожалуйста, заполните Имя и Пол (обязательные поля)",
        alreadyHasSpouse: "У этого человека уже есть супруг. Пожалуйста, сначала удалите существующего супруга."
    }
};

// Get translation
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// ============================================
// TOOLBAR AND SIDEBAR FUNCTIONS
// ============================================

// Toggle sidebar visibility
function toggleSidebar() {
    sidebarHidden = !sidebarHidden;
    const sidebar = document.getElementById('leftSidebar');
    const container = document.querySelector('.tree-container');

    if (sidebarHidden) {
        sidebar.classList.add('hidden');
        container.classList.add('sidebar-hidden');
    } else {
        sidebar.classList.remove('hidden');
        container.classList.remove('sidebar-hidden');
    }
}

// Switch sidebar tabs
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.sidebar-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.sidebar-tab').classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName + 'Content').classList.add('active');
}

// Toolbar tool functions
function showTextTool() {
    alert('Text tool - Add custom text labels to your tree');
}

function showConnectorTool() {
    alert('Connector tool - Draw custom connections between family members');
}

function showLinkTool() {
    if (currentCustomizePersonId) {
        openCustomizeMenu(currentCustomizePersonId);
    } else {
        alert('Please select a person card first, then use the Style button to add links');
    }
}

function showAlignTool() {
    alert('Align tool - Coming soon - Align multiple selected objects');
}

function showComments() {
    alert('Comments - Add notes and comments to your family tree');
}

function showEmojiPicker() {
    alert('Emoji picker - Add emojis to person cards');
}

// Handle photo upload from sidebar
function handleSidebarPhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const photoData = e.target.result;

        // Store uploaded photo
        uploadedPhotos.push({
            data: photoData,
            name: file.name,
            timestamp: new Date().toISOString()
        });

        // Update recent uploads display
        updateRecentUploads();

        // If a person is selected, offer to add photo
        if (currentCustomizePersonId) {
            if (confirm('Do you want to add this photo to the selected person?')) {
                addPhotoToSelectedPerson(photoData);
            }
        }
    };
    reader.readAsDataURL(file);

    // Reset input
    event.target.value = '';
}

// Update recent uploads display
function updateRecentUploads() {
    const container = document.getElementById('recentUploads');
    if (!container) return;

    if (uploadedPhotos.length === 0) {
        container.innerHTML = '<p style="color: #999; font-size: 12px;">No photos uploaded yet</p>';
        return;
    }

    container.innerHTML = uploadedPhotos.slice(-6).reverse().map((photo, index) => {
        const photoIndex = uploadedPhotos.length - 1 - index;
        return `
        <div class="upload-thumbnail-wrapper">
            <div class="upload-thumbnail" onclick="selectUploadedPhoto(${photoIndex})">
                <img src="${photo.data}" alt="${photo.name}">
                <div class="upload-thumbnail-overlay">${photo.name.substring(0, 12)}</div>
            </div>
            <div class="upload-actions">
                <button class="upload-action-btn" onclick="event.stopPropagation(); sharePhoto(${photoIndex})" title="Share">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                </button>
                <button class="upload-action-btn" onclick="event.stopPropagation(); copyPhotoLink(${photoIndex})" title="Copy Link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                </button>
                <button class="upload-action-btn" onclick="event.stopPropagation(); downloadPhoto(${photoIndex})" title="Download">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </button>
            </div>
        </div>
        `;
    }).join('');
}

// Select an uploaded photo to add to current person
function selectUploadedPhoto(index) {
    const photo = uploadedPhotos[index];

    if (currentCustomizePersonId) {
        addPhotoToSelectedPerson(photo.data);
    } else {
        alert('Please select a person card first, then choose a photo to add.');
    }
}

// Share photo (opens system share dialog if available)
function sharePhoto(index) {
    const photo = uploadedPhotos[index];

    // Try to use Web Share API if available
    if (navigator.share) {
        // Convert base64 to blob
        fetch(photo.data)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], photo.name, { type: blob.type });
                return navigator.share({
                    title: 'Family Tree Photo',
                    text: `Photo: ${photo.name}`,
                    files: [file]
                });
            })
            .then(() => console.log('Shared successfully'))
            .catch(err => {
                if (err.name !== 'AbortError') {
                    // Fallback to copy link
                    copyPhotoLink(index);
                }
            });
    } else {
        // Fallback: show share options
        showShareOptions(index);
    }
}

// Show share options modal
function showShareOptions(index) {
    const photo = uploadedPhotos[index];
    const message = `Share "${photo.name}":\n\n` +
                   `1. Copy Link - Copies photo data link to clipboard\n` +
                   `2. Download - Downloads photo to your device\n\n` +
                   `Choose an option:`;

    if (confirm(message + '\n\nClick OK to Copy Link, Cancel to Download')) {
        copyPhotoLink(index);
    } else {
        downloadPhoto(index);
    }
}

// Copy photo data link to clipboard
function copyPhotoLink(index) {
    const photo = uploadedPhotos[index];

    // For base64 data, we can copy the data URL
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(photo.data)
            .then(() => {
                // Show success message
                showToast('✓ Photo link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                // Fallback method
                fallbackCopyText(photo.data);
            });
    } else {
        // Fallback for older browsers
        fallbackCopyText(photo.data);
    }
}

// Fallback copy method for older browsers
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showToast('✓ Photo link copied to clipboard!');
    } catch (err) {
        alert('Unable to copy to clipboard. Please try again.');
    }

    document.body.removeChild(textArea);
}

// Download photo
function downloadPhoto(index) {
    const photo = uploadedPhotos[index];

    const link = document.createElement('a');
    link.href = photo.data;
    link.download = photo.name || 'family-tree-photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('✓ Photo downloaded!');
}

// Show toast notification
function showToast(message) {
    // Remove any existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add photo to currently selected person
function addPhotoToSelectedPerson(photoData) {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const photoContainer = personDiv.querySelector('.photo-container');
    if (!photoContainer) return;

    // Add photo
    photoContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = photoData;
    img.alt = 'Family member photo';
    photoContainer.appendChild(img);
    photoContainer.classList.remove('empty');

    // Store photo data
    personDiv.dataset.photo = photoData;

    animateChange(personDiv);

    // Refresh properties panel to show photo options
    openPropertiesPanel(currentCustomizePersonId);
}

// Set default photo shape
function setPhotoShapeDefault(shape) {
    photoShapeDefault = shape;
    alert(`Default photo shape set to: ${shape}`);
}

// Add new person with specific shape from sidebar
function addNewPersonWithShape(shape) {
    alert(`Click "+ Child" button on any existing person to add a new family member.\n\nThe new person will be created with ${shape} shape.\n\nYou can also change shapes in the Properties panel.`);
}

// ============================================
// CARD MENU FUNCTIONS (3-dot menu)
// ============================================

// Store original parent of menu for restoration
let menuOriginalParent = null;

// Toggle card menu
function toggleCardMenu(event, personId) {
    event.stopPropagation(); // Prevent opening properties panel
    event.preventDefault(); // Prevent any default behavior
    event.stopImmediatePropagation(); // Stop any other handlers

    const menuId = 'cardMenu' + personId;
    const menu = document.getElementById(menuId);

    if (!menu) {
        return;
    }

    // Get the person card that contains this menu
    const personCard = menu.closest('.person');

    // Show/hide buttons based on whether person has spouse
    const addSpouseBtn = menu.querySelector('[onclick*="addSpouse"]');
    const addChildBtn = menu.querySelector('[onclick*="addChild"]');
    const removeBtn = menu.querySelector('[onclick*="removePerson"]');

    // Hide Remove button for the root node (id=1)
    if (removeBtn && personId === 1) {
        removeBtn.style.display = 'none';
    } else if (removeBtn) {
        removeBtn.style.display = 'flex';
    }

    // Check if this is a spouse card
    const isSpouseCard = personCard && personCard.classList.contains('spouse-person');

    if (isSpouseCard) {
        // Spouse cards should always show "Add Child" and never show "Add Spouse"
        if (addChildBtn) {
            addChildBtn.style.display = 'flex';
        }
        if (addSpouseBtn) {
            addSpouseBtn.style.display = 'none';
        }
    } else if (hasSpouse(personId)) {
        // Has spouse: hide "Add Spouse", show "Add Child"
        if (addSpouseBtn) {
            addSpouseBtn.style.display = 'none';
        }
        if (addChildBtn) {
            addChildBtn.style.display = 'flex';
        }
    } else {
        // No spouse: show "Add Spouse", hide "Add Child"
        if (addSpouseBtn) {
            addSpouseBtn.style.display = 'flex';
        }
        if (addChildBtn) {
            addChildBtn.style.display = 'none';
        }
    }

    // Close any other open menu
    if (currentOpenMenu && currentOpenMenu !== menu) {
        currentOpenMenu.classList.remove('show');
        const prevCard = currentOpenMenu.closest('.person');
        if (prevCard) {
            prevCard.classList.remove('menu-open');
        }
        // Restore menu to original location
        if (menuOriginalParent && currentOpenMenu.dataset.originalParent) {
            const originalParent = document.querySelector(`[data-id="${currentOpenMenu.dataset.originalParent}"]`);
            if (originalParent) {
                originalParent.appendChild(currentOpenMenu);
            }
        }
    }

    // Toggle current menu
    const isOpen = menu.classList.contains('show');

    if (isOpen) {
        // Close menu
        menu.classList.remove('show');
        if (personCard) {
            personCard.classList.remove('menu-open');
        }

        // Restore menu to original location
        if (menuOriginalParent) {
            personCard.appendChild(menu);
            menuOriginalParent = null;
        }

        currentOpenMenu = null;
    } else {
        // Open menu

        // Store original parent
        menuOriginalParent = personCard;
        menu.dataset.originalParent = personId;

        // Show menu first to calculate dimensions
        menu.classList.add('show');

        // Move menu to body to escape clip-path
        document.body.appendChild(menu);

        // Calculate position relative to viewport + scroll
        const buttonRect = event.target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // Position menu below button, accounting for scroll
        const top = buttonRect.bottom + scrollTop + 5;
        const left = buttonRect.right + scrollLeft - 180; // 180 = menu width, align to right

        menu.style.top = top + 'px';
        menu.style.left = left + 'px';
        menu.style.right = 'auto';

        if (personCard) {
            personCard.classList.add('menu-open');
        }
        currentOpenMenu = menu;
    }
}

// Close card menu
function closeCardMenu() {
    if (currentOpenMenu) {
        currentOpenMenu.classList.remove('show');

        // Restore menu to original location if it was moved
        if (menuOriginalParent && currentOpenMenu.dataset.originalParent) {
            menuOriginalParent.appendChild(currentOpenMenu);
            delete currentOpenMenu.dataset.originalParent;
            menuOriginalParent = null;
        }

        // Remove menu-open class from the person card
        const allPersons = document.querySelectorAll('.person.menu-open');
        allPersons.forEach(p => p.classList.remove('menu-open'));

        currentOpenMenu = null;
    }
}

// Close card menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.card-menu') && !event.target.closest('.card-menu-btn')) {
        closeCardMenu();
    }
});

// Handle photo upload from properties panel
function handlePropertyPhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const photoData = e.target.result;

        // Add to uploaded photos
        uploadedPhotos.push({
            data: photoData,
            name: file.name,
            timestamp: new Date().toISOString()
        });
        updateRecentUploads();

        // Add to current person
        addPhotoToSelectedPerson(photoData);
    };
    reader.readAsDataURL(file);

    // Reset input
    event.target.value = '';
}

// Remove photo from person
function removePersonPhoto() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const photoContainer = personDiv.querySelector('.photo-container');
    if (!photoContainer) return;

    // Remove photo
    photoContainer.innerHTML = '';
    photoContainer.classList.add('empty');
    delete personDiv.dataset.photo;

    animateChange(personDiv);

    // Refresh properties panel
    openPropertiesPanel(currentCustomizePersonId);
}

// Helper function to get spouse person div
function getSpouseDiv(personId) {
    // Find the person's li
    const personLi = document.querySelector(`li[data-id="${personId}"]`);
    if (!personLi) return null;

    const spouseId = personLi.dataset.spouseId;
    if (!spouseId) return null;

    // Find spouse in family box
    const familyBox = personLi.querySelector('.family-box');
    if (!familyBox) return null;

    return familyBox.querySelector(`.person[data-id="${spouseId}"]`);
}

// Helper function to get person's spouse ID from a spouse div
function getSpousePartnerDiv(personId) {
    // This person is a spouse - find their partner
    // Look for the li that has this person as spouseId
    const allLis = document.querySelectorAll('li[data-spouse-id]');
    for (let li of allLis) {
        if (li.dataset.spouseId === String(personId)) {
            // Found the partner's li
            const familyBox = li.querySelector('.family-box');
            if (familyBox) {
                // Return the person div inside the li (not the spouse div)
                const coupleContainer = familyBox.querySelector('.couple-container');
                if (coupleContainer) {
                    // Find the person div that doesn't match our spouse ID
                    const personDivs = coupleContainer.querySelectorAll('.person');
                    for (let div of personDivs) {
                        if (div.dataset.id !== String(personId)) {
                            return div;
                        }
                    }
                }
            }
        }
    }
    return null;
}

// Change photo shape
function changePhotoShape(shape) {
    if (!currentCustomizePersonId) return;

    let personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') : null;

    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    }

    if (!personDiv) return;

    const photoContainer = personDiv.querySelector('.photo-container');
    if (!photoContainer) return;

    // Remove existing shape classes
    photoContainer.classList.remove('photo-shape-circle', 'photo-shape-square', 'photo-shape-rounded', 'photo-shape-heart', 'photo-shape-diamond', 'photo-shape-star');

    // Add new shape class
    photoContainer.classList.add(`photo-shape-${shape}`);

    animateChange(personDiv);

    // Also update spouse's photo shape
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        // Current person might be a spouse themselves
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        const spousePhotoContainer = spouseDiv.querySelector('.photo-container');
        if (spousePhotoContainer) {
            spousePhotoContainer.classList.remove('photo-shape-circle', 'photo-shape-square', 'photo-shape-rounded', 'photo-shape-heart', 'photo-shape-diamond', 'photo-shape-star');
            spousePhotoContainer.classList.add(`photo-shape-${shape}`);
            animateChange(spouseDiv);
        }
    }

    // Refresh properties panel
    openPropertiesPanel(currentCustomizePersonId);
}

// Gender symbols
const genderSymbols = {
    'male': '♂',
    'female': '♀',
    'other': '⚥'
};

// Initialize the modal
const modal = document.getElementById('addModal');
const modalTitle = document.getElementById('modalTitle');
const submitBtn = document.getElementById('submitBtn');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('addPersonForm');
const photoInput = document.getElementById('personPhoto');
const photoPreview = document.getElementById('photoPreview');

closeBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

form.onsubmit = function(event) {
    event.preventDefault();
    if (isEditMode) {
        submitEditPerson();
    } else {
        submitNewPerson();
    }
};

// Handle photo upload preview
photoInput.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            photoInput.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            currentPhotoData = e.target.result;
            showPhotoPreview(currentPhotoData);
        };
        reader.readAsDataURL(file);
    }
};

// Show photo preview in modal
function showPhotoPreview(photoData) {
    photoPreview.innerHTML = `
        <img src="${photoData}" alt="Preview">
        <button type="button" class="remove-photo" onclick="removePhotoPreview()">Remove Photo</button>
    `;
}

// Remove photo preview
function removePhotoPreview() {
    currentPhotoData = null;
    photoInput.value = '';
    photoPreview.innerHTML = '';
}


// Add a child to a person
function addChild(parentId) {
    isEditMode = false;
    isSpouseMode = false;

    // Hide marriage date field for child
    const marriageDateSection = document.getElementById('marriageDateSection');
    const marriageDateInput = document.getElementById('marriageDate');
    if (marriageDateSection) {
        marriageDateSection.style.display = 'none';
        if (marriageDateInput) {
            marriageDateInput.removeAttribute('required');
        }
    }
    currentParentId = parentId;
    modalTitle.textContent = t('addChild');
    submitBtn.textContent = t('addChild');
    modal.style.display = 'block';

    // Control photo section visibility based on global toggle
    const modalPhotoSection = document.getElementById('modalPhotoSection');
    if (modalPhotoSection) {
        modalPhotoSection.style.display = globalShowPhotos ? 'block' : 'none';
    }
}

// Edit person information
function editPersonInfo(personId) {
    isEditMode = true;
    isSpouseMode = false;
    editingPersonId = personId;

    // Find the person element
    let personLi = document.querySelector(`li[data-id="${personId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') :
                    document.querySelector(`.person[data-id="${personId}"]`);

    if (!personDiv) {
        alert('Person not found');
        return;
    }

    // Get current data
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');
    const occupationElement = personDiv.querySelector('.occupation');
    const genderBadge = personDiv.querySelector('.gender-badge');

    // Determine gender
    let gender = 'male';
    if (personLi && personLi.dataset.gender) {
        gender = personLi.dataset.gender;
    } else if (personDiv.dataset.gender) {
        gender = personDiv.dataset.gender;
    } else {
        const genderText = genderBadge ? genderBadge.textContent : '';
        if (genderText === '♀') gender = 'female';
        else if (genderText === '♂') gender = 'male';
        else if (genderText === '⚥') gender = 'other';
    }

    // Populate form
    document.getElementById('personName').value = nameElement ? nameElement.textContent : '';
    document.getElementById('personGender').value = gender;
    document.getElementById('personDates').value = datesElement ? datesElement.textContent : '';
    document.getElementById('personOccupation').value = occupationElement ? occupationElement.textContent : '';

    // Check if this is a spouse being edited
    const isSpouse = personDiv.classList.contains('spouse-person');

    // Show modal
    modalTitle.textContent = 'Edit Person Information';
    submitBtn.textContent = 'Update Person';
    modal.style.display = 'block';

    // Show/hide marriage date field based on whether this is a spouse
    const marriageDateSection = document.getElementById('marriageDateSection');
    const marriageDateInput = document.getElementById('marriageDate');
    if (marriageDateSection) {
        if (isSpouse) {
            // Find the marriage date from the family box
            const familyBox = personDiv.closest('.family-box');
            const marriageDateDiv = familyBox ? familyBox.querySelector('.marriage-date') : null;
            const marriageDateValue = marriageDateDiv ? marriageDateDiv.textContent : '';

            marriageDateInput.value = marriageDateValue;
            marriageDateSection.style.display = 'block';
            if (marriageDateInput) {
                marriageDateInput.setAttribute('required', 'required');
            }
            isSpouseMode = true;
        } else {
            marriageDateSection.style.display = 'none';
            if (marriageDateInput) {
                marriageDateInput.removeAttribute('required');
            }
        }
    }

    // Control photo section visibility based on global toggle
    const modalPhotoSection = document.getElementById('modalPhotoSection');
    if (modalPhotoSection) {
        modalPhotoSection.style.display = globalShowPhotos ? 'block' : 'none';
    }
}

// Add a spouse to a person
function addSpouse(personId) {
    // Check if person already has a spouse before opening modal
    if (hasSpouse(personId)) {
        alert(t('alreadyHasSpouse'));
        return;
    }

    isEditMode = false;
    isSpouseMode = true;
    currentParentId = personId;

    modalTitle.textContent = t('addSpouse');
    submitBtn.textContent = t('addSpouse');
    modal.style.display = 'block';

    // Show marriage date field for spouse
    const marriageDateSection = document.getElementById('marriageDateSection');
    const marriageDateInput = document.getElementById('marriageDate');
    if (marriageDateSection) {
        marriageDateSection.style.display = 'block';
        if (marriageDateInput) {
            marriageDateInput.setAttribute('required', 'required');
        }
    }

    // Control photo section visibility based on global toggle
    const modalPhotoSection = document.getElementById('modalPhotoSection');
    if (modalPhotoSection) {
        modalPhotoSection.style.display = globalShowPhotos ? 'block' : 'none';
    }
}

// Close the modal
function closeModal() {
    modal.style.display = 'none';
    form.reset();
    removePhotoPreview();
    currentParentId = null;
    editingPersonId = null;
    isEditMode = false;
    isSpouseMode = false;

    // Hide marriage date field
    const marriageDateSection = document.getElementById('marriageDateSection');
    const marriageDateInput = document.getElementById('marriageDate');
    if (marriageDateSection) {
        marriageDateSection.style.display = 'none';
        if (marriageDateInput) {
            marriageDateInput.removeAttribute('required');
        }
    }
}

// Submit edited person
function submitEditPerson() {
    const name = document.getElementById('personName').value.trim();
    const gender = document.getElementById('personGender').value;
    const dates = document.getElementById('personDates').value.trim();
    const occupation = document.getElementById('personOccupation').value.trim();
    const marriageDate = document.getElementById('marriageDate').value.trim();

    if (!name || !gender) {
        alert('Please fill in Name and Gender (required fields)');
        return;
    }

    // If editing a spouse, require marriage date
    if (isSpouseMode && !marriageDate) {
        alert('Please fill in Marriage Date (required field)');
        return;
    }

    // Try to find as regular person first
    let personLi = document.querySelector(`li[data-id="${editingPersonId}"]`);
    let personDiv, nameElement, datesElement, occupationElement, genderBadge, photoContainer;

    if (personLi) {
        // Regular person
        personDiv = personLi.querySelector('.person');
        nameElement = personDiv.querySelector('.name');
        datesElement = personDiv.querySelector('.dates');
        occupationElement = personDiv.querySelector('.occupation');
        genderBadge = personDiv.querySelector('.gender-badge');
        photoContainer = personDiv.querySelector('.photo-container');

        // Update gender data attribute
        personLi.dataset.gender = gender;
    } else {
        // Spouse in family box
        personDiv = document.querySelector(`.person[data-id="${editingPersonId}"]`);
        if (!personDiv) {
            alert('Person not found');
            return;
        }
        nameElement = personDiv.querySelector('.name');
        datesElement = personDiv.querySelector('.dates');
        occupationElement = personDiv.querySelector('.occupation');
        genderBadge = personDiv.querySelector('.gender-badge');
        photoContainer = personDiv.querySelector('.photo-container');
    }

    // Update the person's information
    nameElement.textContent = name;
    genderBadge.textContent = genderSymbols[gender];

    // Update or add/remove dates element
    if (dates) {
        if (datesElement) {
            datesElement.textContent = dates;
        } else {
            // Create dates element if it doesn't exist
            const newDatesElement = document.createElement('div');
            newDatesElement.className = 'dates';
            newDatesElement.textContent = dates;
            genderBadge.insertAdjacentElement('afterend', newDatesElement);
        }
    } else {
        // Remove dates element if dates is empty
        if (datesElement) {
            datesElement.remove();
        }
    }

    // Update or add/remove occupation element
    if (occupation) {
        if (occupationElement) {
            occupationElement.textContent = occupation;
        } else {
            // Create occupation element if it doesn't exist
            const newOccupationElement = document.createElement('div');
            newOccupationElement.className = 'occupation';
            newOccupationElement.textContent = occupation;
            const lastElement = personDiv.querySelector('.dates') || genderBadge;
            lastElement.insertAdjacentElement('afterend', newOccupationElement);
        }
    } else {
        // Remove occupation element if occupation is empty
        if (occupationElement) {
            occupationElement.remove();
        }
    }

    // Update gender classes
    personDiv.classList.remove('gender-male', 'gender-female', 'gender-other');
    personDiv.classList.add(`gender-${gender}`);

    // Update photo
    updatePhoto(photoContainer, currentPhotoData);

    // Update marriage date if editing a spouse
    if (isSpouseMode && marriageDate) {
        const familyBox = personDiv.closest('.family-box');
        if (familyBox) {
            let marriageDateDiv = familyBox.querySelector('.marriage-date');
            if (marriageDateDiv) {
                marriageDateDiv.textContent = marriageDate;
            } else {
                // Create marriage date div if it doesn't exist
                marriageDateDiv = document.createElement('div');
                marriageDateDiv.className = 'marriage-date';
                marriageDateDiv.textContent = marriageDate;
                familyBox.appendChild(marriageDateDiv);
            }
        }
    }

    // Add a brief highlight animation
    personDiv.style.transform = 'scale(1.1)';
    personDiv.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6)';

    setTimeout(() => {
        personDiv.style.transform = '';
        personDiv.style.boxShadow = '';
    }, 500);

    closeModal();
}

// Update photo in container
function updatePhoto(photoContainer, photoData) {
    photoContainer.innerHTML = '';
    if (photoData) {
        const img = document.createElement('img');
        img.src = photoData;
        img.alt = 'Family member photo';
        photoContainer.appendChild(img);
        photoContainer.classList.remove('empty');
    } else {
        photoContainer.classList.add('empty');
    }
}

// Submit new person form
function submitNewPerson() {
    const name = document.getElementById('personName').value.trim();
    const gender = document.getElementById('personGender').value;
    const dates = document.getElementById('personDates').value.trim();
    const occupation = document.getElementById('personOccupation').value.trim();
    const marriageDate = document.getElementById('marriageDate').value.trim();

    if (!name || !gender) {
        alert('Please fill in Name and Gender (required fields)');
        return;
    }

    if (isSpouseMode && !marriageDate) {
        alert('Please fill in Marriage Date (required field)');
        return;
    }

    if (isSpouseMode) {
        addSpouseToPerson(name, gender, dates, occupation, marriageDate);
    } else {
        addChildToPerson(name, gender, dates, occupation);
    }
}

// Check if person already has a spouse
function hasSpouse(personId) {
    const personLi = document.querySelector(`li[data-id="${personId}"]`);
    if (!personLi) return false;

    return personLi.dataset.spouseId ? true : false;
}

// Add a spouse to a person (same level)
function addSpouseToPerson(name, gender, dates, occupation, marriageDate) {
    const personLi = document.querySelector(`li[data-id="${currentParentId}"]`);

    if (!personLi) {
        alert('Person not found');
        return;
    }

    // Check if person already has a spouse
    if (hasSpouse(currentParentId)) {
        alert('This person already has a spouse. Please remove the existing spouse first.');
        closeModal();
        return;
    }

    const parentLevel = parseInt(personLi.dataset.level);
    const levelClass = ((parentLevel - 1) % 6) + 1;
    const newId = nextId++;

    // Create family box wrapper if it doesn't exist
    let familyBox = personLi.querySelector(':scope > .family-box');

    if (!familyBox) {
        // Wrap the existing person in a family box
        familyBox = document.createElement('div');
        familyBox.className = 'family-box';

        // Add editable family label
        const familyLabel = document.createElement('div');
        familyLabel.className = 'family-label';
        familyLabel.contentEditable = 'true';
        familyLabel.textContent = 'Couple';
        familyLabel.dataset.gradient = 'default'; // Track current gradient

        familyLabel.addEventListener('blur', function() {
            if (!this.textContent.trim()) {
                this.textContent = 'Couple';
            }
        });

        familyLabel.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.blur();
            }
        });

        // Right-click to change colors
        familyLabel.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showLabelColorMenu(this, e);
        });

        familyBox.appendChild(familyLabel);

        const personsContainer = document.createElement('div');
        personsContainer.className = 'couple-container';

        // Move existing person card into the container
        const existingPerson = personLi.querySelector(':scope > .person');
        personsContainer.appendChild(existingPerson);

        familyBox.appendChild(personsContainer);

        // Add marriage date if provided
        if (marriageDate) {
            const marriageDateDiv = document.createElement('div');
            marriageDateDiv.className = 'marriage-date';
            marriageDateDiv.textContent = marriageDate;
            marriageDateDiv.dataset.gradient = 'default'; // Track current gradient

            // Right-click to change colors
            marriageDateDiv.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showLabelColorMenu(this, e);
            });

            familyBox.appendChild(marriageDateDiv);
        }

        personLi.insertBefore(familyBox, personLi.firstChild);
    }

    // Create spouse person card
    const spouseDiv = document.createElement('div');
    spouseDiv.className = `person level-${levelClass} gender-${gender} new-person spouse-person shape-apple`;
    spouseDiv.dataset.id = newId;
    spouseDiv.dataset.gender = gender; // Store gender on the div itself for spouse cards

    spouseDiv.innerHTML = `
        <button class="card-menu-btn" onclick="toggleCardMenu(event, ${newId})">⋮</button>
        <div class="card-menu" id="cardMenu${newId}">
            <button class="menu-item" onclick="editPersonInfo(${newId}); closeCardMenu()">
                <span class="menu-icon">✏️</span>
                <span>Edit Info</span>
            </button>
            <button class="menu-item" onclick="addChild(${currentParentId}); closeCardMenu()">
                <span class="menu-icon">👶</span>
                <span>Add Child</span>
            </button>
            <button class="menu-item menu-item-danger" onclick="removeSpouse(${newId}); closeCardMenu()">
                <span class="menu-icon">🗑️</span>
                <span>Remove Spouse</span>
            </button>
        </div>
        <div class="photo-container ${currentPhotoData ? '' : 'empty'}"></div>
        <div class="name">${name}</div>
        <div class="gender-badge">${genderSymbols[gender]}</div>
        ${dates ? `<div class="dates">${dates}</div>` : ''}
        ${occupation ? `<div class="occupation">${occupation}</div>` : ''}
    `;

    // Add photo if uploaded
    if (currentPhotoData) {
        const photoContainer = spouseDiv.querySelector('.photo-container');
        photoContainer.classList.remove('empty');
        const img = document.createElement('img');
        img.src = currentPhotoData;
        img.alt = name;
        photoContainer.appendChild(img);
    }

    // Apply global photo visibility
    const photoContainer = spouseDiv.querySelector('.photo-container');
    if (!globalShowPhotos && photoContainer) {
        photoContainer.style.display = 'none';
        spouseDiv.classList.add('no-photo');
    }

    // Add spouse to the couple container
    const coupleContainer = familyBox.querySelector('.couple-container');
    coupleContainer.appendChild(spouseDiv);

    // Mark both as having spouses (bidirectional relationship)
    personLi.dataset.spouseId = newId;
    personLi.dataset.spouseName = name;

    // Hide spouse button for the original person
    const originalSpouseBtn = personLi.querySelector('.btn-spouse');
    if (originalSpouseBtn) {
        originalSpouseBtn.style.display = 'none';
    }

    closeModal();

    setTimeout(() => {
        spouseDiv.classList.remove('new-person');
    }, 500);

    // Add font menu handlers to new spouse card
    const spouseTextElements = spouseDiv.querySelectorAll('.name, .dates, .occupation');
    spouseTextElements.forEach(element => {
        element.style.cursor = 'text';
        element.addEventListener('click', function(event) {
            if (document.getElementById('propertiesPanel').classList.contains('show')) {
                return;
            }
            showFloatingFontMenu(element, event);
        });
    });
}

// Remove spouse (not the whole person)
function removeSpouse(spouseId) {
    const parentLi = document.querySelector(`li[data-spouse-id]`);
    if (!parentLi) return;

    const confirmDelete = confirm('Remove this spouse from the family?');
    if (!confirmDelete) return;

    const familyBox = parentLi.querySelector('.family-box');
    if (!familyBox) return;

    const spouseDiv = familyBox.querySelector(`[data-id="${spouseId}"]`);
    if (spouseDiv) {
        spouseDiv.classList.add('removing');

        setTimeout(() => {
            spouseDiv.remove();

            // If only one person left, unwrap from family box
            const coupleContainer = familyBox.querySelector('.couple-container');
            if (coupleContainer.children.length === 1) {
                const remainingPerson = coupleContainer.querySelector('.person');
                parentLi.insertBefore(remainingPerson, familyBox);
                familyBox.remove();
            }

            // Remove spouse relationship
            delete parentLi.dataset.spouseId;
            delete parentLi.dataset.spouseName;

            // Show spouse button again
            const spouseBtn = parentLi.querySelector('.btn-spouse');
            if (spouseBtn) {
                spouseBtn.style.display = '';
            }
        }, 300);
    }
}

// Add a child to a person (next level)
function addChildToPerson(name, gender, dates, occupation) {
    const parentLi = document.querySelector(`li[data-id="${currentParentId}"]`);
    if (!parentLi) {
        alert('Parent not found');
        return;
    }

    const parentLevel = parseInt(parentLi.dataset.level);
    const childLevel = parentLevel + 1;
    const levelClass = ((childLevel - 1) % 6) + 1;
    const newId = nextId++;

    const newLi = document.createElement('li');
    newLi.dataset.id = newId;
    newLi.dataset.level = childLevel;
    newLi.dataset.gender = gender;

    newLi.innerHTML = `
        <div class="person level-${levelClass} gender-${gender} new-person shape-apple">
            <button class="card-menu-btn" onclick="toggleCardMenu(event, ${newId})">⋮</button>
            <div class="card-menu" id="cardMenu${newId}">
                <button class="menu-item" onclick="editPersonInfo(${newId}); closeCardMenu()">
                    <span class="menu-icon">✏️</span>
                    <span>Edit Info</span>
                </button>
                <button class="menu-item" onclick="addSpouse(${newId}); closeCardMenu()">
                    <span class="menu-icon">💑</span>
                    <span>Add Spouse</span>
                </button>
                <button class="menu-item" onclick="addChild(${newId}); closeCardMenu()" style="display: none;">
                    <span class="menu-icon">👶</span>
                    <span>Add Child</span>
                </button>
                <button class="menu-item menu-item-danger" onclick="removePerson(${newId}); closeCardMenu()">
                    <span class="menu-icon">🗑️</span>
                    <span>Remove</span>
                </button>
            </div>
            <div class="photo-container ${currentPhotoData ? '' : 'empty'}"></div>
            <div class="name">${name}</div>
            <div class="gender-badge">${genderSymbols[gender]}</div>
            ${dates ? `<div class="dates">${dates}</div>` : ''}
            ${occupation ? `<div class="occupation">${occupation}</div>` : ''}
        </div>
    `;

    // Add photo if uploaded
    if (currentPhotoData) {
        const photoContainer = newLi.querySelector('.photo-container');
        photoContainer.classList.remove('empty');
        const img = document.createElement('img');
        img.src = currentPhotoData;
        img.alt = name;
        photoContainer.appendChild(img);
    }

    // Apply global photo visibility
    const photoContainer = newLi.querySelector('.photo-container');
    const personDiv = newLi.querySelector('.person');
    if (!globalShowPhotos && photoContainer) {
        photoContainer.style.display = 'none';
        if (personDiv) {
            personDiv.classList.add('no-photo');
        }
    }

    // Find or create the children <ul> for the parent
    // Children always attach to the parent <li>, not inside the family box
    let childrenUl = parentLi.querySelector(':scope > ul');
    if (!childrenUl) {
        childrenUl = document.createElement('ul');
        parentLi.appendChild(childrenUl);
    }

    childrenUl.appendChild(newLi);

    closeModal();

    setTimeout(() => {
        const personDiv = newLi.querySelector('.person');
        if (personDiv) {
            personDiv.classList.remove('new-person');
        }
    }, 500);

    // Add font menu handlers to new child card
    const childTextElements = newLi.querySelectorAll('.name, .dates, .occupation');
    childTextElements.forEach(element => {
        element.style.cursor = 'text';
        element.addEventListener('click', function(event) {
            if (document.getElementById('propertiesPanel').classList.contains('show')) {
                return;
            }
            showFloatingFontMenu(element, event);
        });
    });
}

// Remove a person from the tree
function removePerson(personId) {
    // Don't allow removing the root person
    if (personId === 1) {
        alert('Cannot remove the root ancestor of the family tree');
        return;
    }

    const personLi = document.querySelector(`li[data-id="${personId}"]`);
    if (!personLi) {
        alert('Person not found');
        return;
    }

    // Check if person has children
    const childrenUl = personLi.querySelector(':scope > ul');
    const hasChildren = childrenUl && childrenUl.children.length > 0;

    if (hasChildren) {
        const confirmDelete = confirm(
            'This person has children in the tree. Removing them will also remove all their descendants. Are you sure?'
        );
        if (!confirmDelete) {
            return;
        }
    }

    // If this person has a spouse in a family box, handle it
    const spouseId = personLi.dataset.spouseId;
    if (spouseId) {
        const familyBox = personLi.querySelector('.family-box');
        if (familyBox) {
            const spouseDiv = familyBox.querySelector(`[data-id="${spouseId}"]`);
            if (spouseDiv) {
                // Remove spouse from family box
                spouseDiv.remove();

                // Unwrap family box if only one person remains
                const coupleContainer = familyBox.querySelector('.couple-container');
                if (coupleContainer && coupleContainer.children.length === 1) {
                    const remainingPerson = coupleContainer.querySelector('.person');
                    personLi.insertBefore(remainingPerson, familyBox);
                    familyBox.remove();
                }
            }
        }

        // Clean up spouse data
        delete personLi.dataset.spouseId;
        delete personLi.dataset.spouseName;
    }

    // Add removing animation
    personLi.classList.add('removing');

    // Remove after animation
    setTimeout(() => {
        const parentUl = personLi.parentElement;
        personLi.remove();

        // If the parent <ul> is now empty, remove it
        if (parentUl && parentUl.children.length === 0 && !parentUl.parentElement.matches('.tree')) {
            parentUl.remove();
        }
    }, 300);
}

// Export tree data (optional feature)
function exportTreeData() {
    const treeData = buildTreeData(document.querySelector('.tree > ul > li'));
    console.log('Family Tree Data:', JSON.stringify(treeData, null, 2));
    return treeData;
}

// Build tree data structure recursively
function buildTreeData(liElement) {
    if (!liElement) return null;

    const person = {
        id: liElement.dataset.id,
        level: liElement.dataset.level,
        name: liElement.querySelector('.name').textContent,
        dates: liElement.querySelector('.dates').textContent,
        children: []
    };

    const childrenUl = liElement.querySelector(':scope > ul');
    if (childrenUl) {
        const childLis = childrenUl.querySelectorAll(':scope > li');
        childLis.forEach(childLi => {
            const childData = buildTreeData(childLi);
            if (childData) {
                person.children.push(childData);
            }
        });
    }

    return person;
}

// Search functionality
function searchFamily(searchTerm) {
    const allPersons = document.querySelectorAll('.person');
    const term = searchTerm.toLowerCase();

    allPersons.forEach(person => {
        const name = person.querySelector('.name').textContent.toLowerCase();
        const dates = person.querySelector('.dates').textContent.toLowerCase();

        if (name.includes(term) || dates.includes(term)) {
            person.style.border = '3px solid gold';
            person.style.boxShadow = '0 0 20px gold';
        } else {
            // Reset to original styling based on level
            person.style.border = '';
            person.style.boxShadow = '';
        }
    });
}

// Count total family members
function countFamilyMembers() {
    const totalMembers = document.querySelectorAll('.tree li').length;
    console.log(`Total family members: ${totalMembers}`);
    return totalMembers;
}

// Get family member by ID
function getFamilyMember(personId) {
    const personLi = document.querySelector(`li[data-id="${personId}"]`);
    if (!personLi) return null;

    return {
        id: personLi.dataset.id,
        level: personLi.dataset.level,
        name: personLi.querySelector('.name').textContent,
        dates: personLi.querySelector('.dates').textContent
    };
}

// Initialize all empty photo containers on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved photo preference
    const savedPhotoPreference = localStorage.getItem('globalShowPhotos');
    if (savedPhotoPreference !== null) {
        globalShowPhotos = savedPhotoPreference === 'true';
        const photoToggle = document.getElementById('globalPhotoToggle');
        if (photoToggle) {
            photoToggle.checked = globalShowPhotos;
        }
    }

    const allPhotoContainers = document.querySelectorAll('.photo-container');
    allPhotoContainers.forEach(container => {
        if (!container.querySelector('img')) {
            container.classList.add('empty');
        }
        // Apply global photo visibility
        if (!globalShowPhotos) {
            container.style.display = 'none';
            // Add no-photo class to parent person card
            const personCard = container.closest('.person');
            if (personCard) {
                personCard.classList.add('no-photo');
            }
        }
    });


    // Apply to modal photo section on page load
    const modalPhotoSection = document.getElementById('modalPhotoSection');
    if (modalPhotoSection) {
        modalPhotoSection.style.display = globalShowPhotos ? 'block' : 'none';
    }

    // Check for existing spouse relationships on page load
    updateSpouseButtons();

    // Add click tooltips to person cards
    addClickTooltips();

    // Add 3-dot menu to all existing cards
    addMenuToExistingCards();

    // Ensure all spouse cards have data-id attributes
    ensureSpouseDataIds();

    // Add click handlers to text elements for font menu
    addFontMenuHandlers();
});

// Add click handlers to all text elements
function addFontMenuHandlers() {
    const allTextElements = document.querySelectorAll('.person .name, .person .dates, .person .occupation');

    allTextElements.forEach(element => {
        element.style.cursor = 'text';
        element.addEventListener('click', function(event) {
            // Don't show font menu if properties panel is open
            if (document.getElementById('propertiesPanel').classList.contains('show')) {
                return;
            }
            showFloatingFontMenu(element, event);
        });
    });
}

// Toggle color picker dropdown
function toggleColorPicker(event) {
    event.stopPropagation();
    const dropdown = document.getElementById('colorPickerDropdown');
    const btn = document.getElementById('colorBtn');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        btn.classList.remove('active');
    } else {
        // Position dropdown next to the color button
        const btnRect = btn.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // Position below the button
        dropdown.style.top = (btnRect.bottom + 5) + 'px';
        dropdown.style.left = (btnRect.left - 90) + 'px'; // Offset to center better

        dropdown.classList.add('show');
        btn.classList.add('active');
    }
}

// Select color from swatch
function selectColor(color, event) {
    event.stopPropagation();

    if (!currentTextElement) return;

    console.log('Selecting color:', color, 'for element:', currentTextElement);

    // Apply color with setProperty to ensure it takes effect
    currentTextElement.style.setProperty('color', color, 'important');
    currentTextElement.dataset.textColor = color;

    console.log('Color applied. Element style:', currentTextElement.style.color);

    // Update color bar
    const colorBar = document.getElementById('colorBar');
    if (colorBar) {
        colorBar.style.background = color;
        colorBar.style.borderColor = color;
    }

    // Close dropdown
    const dropdown = document.getElementById('colorPickerDropdown');
    const btn = document.getElementById('colorBtn');
    dropdown.classList.remove('show');
    btn.classList.remove('active');

    // Animate change
    if (currentFontPersonId) {
        const personDiv = getPersonDiv(currentFontPersonId);
        if (personDiv) animateChange(personDiv);
    }
}

// Open native color picker
function openNativeColorPicker(event) {
    event.stopPropagation();

    // Close the dropdown first
    const dropdown = document.getElementById('colorPickerDropdown');
    const btn = document.getElementById('colorBtn');
    if (dropdown) dropdown.classList.remove('show');
    if (btn) btn.classList.remove('active');

    const colorInput = document.getElementById('floatTextColor');
    if (colorInput) {
        // Simply click the color input - it's already positioned in the toolbar
        colorInput.click();
    }
}

// Apply color from native picker
function applyColorFromNative(event) {
    event.stopPropagation();
    const color = event.target.value;
    selectColor(color, event);
}

// Close floating menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('floatingFontMenu');
    const colorDropdown = document.getElementById('colorPickerDropdown');

    // Close font toolbar
    if (menu && !event.target.closest('.floating-font-toolbar') && !event.target.closest('.person .name, .person .dates, .person .occupation')) {
        closeFontMenu();
    }

    // Close color picker dropdown
    if (colorDropdown && !event.target.closest('.toolbar-color-dropdown')) {
        colorDropdown.classList.remove('show');
        const btn = document.getElementById('colorBtn');
        if (btn) btn.classList.remove('active');
    }
});

// Ensure all spouse cards have proper data-id attributes
function ensureSpouseDataIds() {
    // Find all spouse cards (person divs with data-id but not in an li with data-id)
    const allPersonDivs = document.querySelectorAll('.person[data-id]');

    allPersonDivs.forEach(personDiv => {
        const personId = personDiv.dataset.id;
        const parentLi = personDiv.closest('li[data-id]');

        // If this div has a data-id but is not inside an li with data-id, it's likely a spouse
        if (personId && !parentLi) {
            personDiv.classList.add('spouse-person');
            console.log('Found spouse card with ID:', personId, 'Gender:', personDiv.dataset.gender);
        }
    });

    console.log('Total spouse cards found:', document.querySelectorAll('.spouse-person').length);
}

// Test function to check if spouse is clickable
function testSpouseClick() {
    const spouses = document.querySelectorAll('.spouse-person');
    console.log('=== SPOUSE CLICK TEST ===');
    console.log('Total spouses found:', spouses.length);

    spouses.forEach((spouse, index) => {
        console.log(`Spouse ${index + 1}:`, {
            id: spouse.dataset.id,
            gender: spouse.dataset.gender,
            name: spouse.querySelector('.name')?.textContent,
            hasDataId: !!spouse.dataset.id,
            classes: spouse.className
        });
    });

    console.log('To test: Click on a spouse card and check if Properties panel opens');
    return spouses.length;
}

// Add click handler tooltips to person cards
function addClickTooltips() {
    const allPersonCards = document.querySelectorAll('.tree .person');

    allPersonCards.forEach(personDiv => {
        personDiv.title = 'Click to edit properties';
        personDiv.style.cursor = 'pointer';
    });
}

// Add 3-dot menu to all existing person cards
function addMenuToExistingCards() {
    const allPersonDivs = document.querySelectorAll('.tree .person');

    allPersonDivs.forEach(personDiv => {
        // Skip if already has menu button
        if (personDiv.querySelector('.card-menu-btn')) return;

        // Get person ID
        const personLi = personDiv.closest('li[data-id]');
        const personId = personLi ? personLi.dataset.id : personDiv.dataset.id;
        if (!personId) return;

        // Check if this is a spouse (no spouse button needed)
        const isSpouse = personDiv.dataset.id && !personLi;
        const hasSpouse = personLi && personLi.dataset.spouseId;

        // Create menu button
        const menuBtn = document.createElement('button');
        menuBtn.className = 'card-menu-btn';
        menuBtn.innerHTML = '⋮';
        menuBtn.onclick = (e) => toggleCardMenu(e, personId);

        // Create menu
        const menu = document.createElement('div');
        menu.className = 'card-menu';
        menu.id = `cardMenu${personId}`;

        let menuHTML = '';

        // Add spouse button only if person doesn't have spouse and is not a spouse themselves
        if (!hasSpouse && !isSpouse) {
            menuHTML += `
                <button class="menu-item" onclick="addSpouse(${personId}); closeCardMenu()">
                    <span class="menu-icon">💑</span>
                    <span>Add Spouse</span>
                </button>
            `;
        }

        // Add child button
        menuHTML += `
            <button class="menu-item" onclick="addChild(${personId}); closeCardMenu()">
                <span class="menu-icon">👶</span>
                <span>Add Child</span>
            </button>
        `;

        // Add remove button (not for root person)
        if (personId !== '1') {
            const removeText = isSpouse ? 'Remove Spouse' : 'Remove';
            const removeFunc = isSpouse ? `removeSpouse(${personId})` : `removePerson(${personId})`;
            menuHTML += `
                <button class="menu-item menu-item-danger" onclick="${removeFunc}; closeCardMenu()">
                    <span class="menu-icon">🗑️</span>
                    <span>${removeText}</span>
                </button>
            `;
        }

        menu.innerHTML = menuHTML;

        // Insert menu button and menu at the beginning of person div
        personDiv.insertBefore(menu, personDiv.firstChild);
        personDiv.insertBefore(menuBtn, personDiv.firstChild);

        // Remove old actions div if exists
        const oldActions = personDiv.querySelector('.actions');
        if (oldActions) {
            oldActions.remove();
        }
    });
}

// Update spouse button visibility based on existing relationships
function updateSpouseButtons() {
    const allPersons = document.querySelectorAll('.tree li[data-id]');

    allPersons.forEach(personLi => {
        const personId = personLi.dataset.id;
        const spouseBtn = personLi.querySelector('.btn-spouse');

        if (spouseBtn && hasSpouse(personId)) {
            spouseBtn.style.display = 'none';
        }
    });
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

// Show/hide export menu
function showExportMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('exportMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function hideExportMenu() {
    document.getElementById('exportMenu').style.display = 'none';
}

// Show/hide share menu
function showShareMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('shareMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    hideExportMenu(); // Close export menu if open
}

function hideShareMenu() {
    document.getElementById('shareMenu').style.display = 'none';
}

// Close menus when clicking outside
document.addEventListener('click', function() {
    hideExportMenu();
    hideShareMenu();
});

// Print tree (best option for preserving shapes)
function printTree() {
    // Hide buttons before print
    const buttons = document.querySelectorAll('.card-menu-btn, .btn-export, .btn-export-toolbar, .btn-share-toolbar, .top-toolbar');
    buttons.forEach(btn => btn.style.visibility = 'hidden');

    window.print();

    // Restore buttons after print
    setTimeout(() => {
        buttons.forEach(btn => btn.style.visibility = '');
    }, 1000);
}

// Export tree as Image (PNG)
function exportAsImage() {
    console.log('Export PNG started');

    const treeElement = document.getElementById('familyTree');

    if (!treeElement) {
        alert('Error: Family tree element not found');
        return;
    }

    // Check if html2canvas is loaded
    if (typeof html2canvas === 'undefined') {
        alert('Error: html2canvas library not loaded. Please refresh the page.');
        console.error('html2canvas is not defined');
        return;
    }

    console.log('Starting export process...');

    // Hide buttons and menus
    const hideElements = document.querySelectorAll('.card-menu-btn, .card-menu');
    hideElements.forEach(el => el.style.display = 'none');

    // Capture with html2canvas
    html2canvas(treeElement, {
        backgroundColor: '#f5f5f5',
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        console.log('Canvas created successfully');

        // Show buttons again
        hideElements.forEach(el => el.style.display = '');

        // Convert to blob and download
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            const date = new Date().toISOString().split('T')[0];
            link.download = `family-tree-${date}.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);

            console.log('Download triggered');
            alert('Family tree exported successfully!');
        });
    }).catch(error => {
        console.error('Export error:', error);
        hideElements.forEach(el => el.style.display = '');
        alert('Export failed: ' + error.message + '\n\nTry using Print / Save as PDF instead.');
    });
}

// Export tree as PDF
function exportAsPDF() {
    console.log('Export PDF started');

    const treeElement = document.getElementById('familyTree');

    if (!treeElement) {
        alert('Error: Family tree element not found');
        return;
    }

    // Check if libraries are loaded
    if (typeof html2canvas === 'undefined') {
        alert('Error: html2canvas library not loaded. Please refresh the page.');
        console.error('html2canvas is not defined');
        return;
    }

    if (typeof window.jspdf === 'undefined') {
        alert('Error: jsPDF library not loaded. Please refresh the page.');
        console.error('jsPDF is not defined');
        return;
    }

    console.log('Starting PDF export process...');

    // Hide buttons and menus
    const hideElements = document.querySelectorAll('.card-menu-btn, .card-menu');
    hideElements.forEach(el => el.style.display = 'none');

    // Capture with html2canvas
    html2canvas(treeElement, {
        backgroundColor: '#f5f5f5',
        scale: 2,
        logging: true,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        console.log('Canvas created successfully');

        // Show buttons again
        hideElements.forEach(el => el.style.display = '');

        // Convert to PDF
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        const pdf = new jsPDF({
            orientation: ratio > 1 ? 'landscape' : 'portrait',
            unit: 'px',
            format: [imgWidth / 2, imgHeight / 2]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth / 2, imgHeight / 2);
        const date = new Date().toISOString().split('T')[0];
        pdf.save(`family-tree-${date}.pdf`);

        console.log('PDF download triggered');
        alert('Family tree exported as PDF successfully!');
    }).catch(error => {
        console.error('Export error:', error);
        hideElements.forEach(el => el.style.display = '');
        alert('Export failed: ' + error.message + '\n\nTry using Print / Save as PDF instead.');
    });
}

// ============================================
// LABEL COLOR CUSTOMIZATION
// ============================================

// Predefined gradient options for labels
const labelGradients = {
    default: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    blue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    green: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    orange: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    purple: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    red: 'linear-gradient(135deg, #fa709a 0%, #ff6a00 100%)',
    teal: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    sunset: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)'
};

// Predefined gradient options for shapes (reduced to 4)
const shapeGradients = {
    blue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    sunset: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    mint: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    rose: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
};

// Show color menu for labels
function showLabelColorMenu(element, event) {
    // Remove any existing menu
    const existingMenu = document.getElementById('labelColorMenu');
    if (existingMenu) {
        existingMenu.remove();
    }

    // Create menu
    const menu = document.createElement('div');
    menu.id = 'labelColorMenu';
    menu.style.position = 'fixed';
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';
    menu.style.background = 'white';
    menu.style.border = '1px solid #ddd';
    menu.style.borderRadius = '8px';
    menu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    menu.style.padding = '8px';
    menu.style.zIndex = '10000';
    menu.style.display = 'grid';
    menu.style.gridTemplateColumns = 'repeat(4, 1fr)';
    menu.style.gap = '8px';

    // Add color options
    Object.keys(labelGradients).forEach(key => {
        const colorBtn = document.createElement('button');
        colorBtn.style.width = '40px';
        colorBtn.style.height = '40px';
        colorBtn.style.border = '2px solid #ddd';
        colorBtn.style.borderRadius = '6px';
        colorBtn.style.background = labelGradients[key];
        colorBtn.style.cursor = 'pointer';
        colorBtn.style.transition = 'transform 0.2s';
        colorBtn.title = key.charAt(0).toUpperCase() + key.slice(1);

        if (element.dataset.gradient === key) {
            colorBtn.style.border = '2px solid #333';
        }

        colorBtn.addEventListener('mouseover', () => {
            colorBtn.style.transform = 'scale(1.1)';
        });

        colorBtn.addEventListener('mouseout', () => {
            colorBtn.style.transform = 'scale(1)';
        });

        colorBtn.addEventListener('click', () => {
            element.style.background = labelGradients[key];
            element.dataset.gradient = key;
            menu.remove();
        });

        menu.appendChild(colorBtn);
    });

    document.body.appendChild(menu);

    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 0);
}

// Show color menu for shape cards
function showShapeColorMenu(shapeElement, event) {
    // Remove any existing menu
    const existingMenu = document.getElementById('shapeColorMenu');
    if (existingMenu) {
        existingMenu.remove();
    }

    // Create menu
    const menu = document.createElement('div');
    menu.id = 'shapeColorMenu';
    menu.style.position = 'fixed';
    menu.style.left = event.clientX + 'px';
    menu.style.top = event.clientY + 'px';
    menu.style.background = 'white';
    menu.style.border = '1px solid #ddd';
    menu.style.borderRadius = '12px';
    menu.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
    menu.style.padding = '12px';
    menu.style.zIndex = '10000';
    menu.style.maxWidth = '280px';

    // Add title
    const title = document.createElement('div');
    title.textContent = 'Choose Shape Color';
    title.style.fontSize = '14px';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '10px';
    title.style.color = '#333';
    menu.appendChild(title);

    // Create color grid
    const colorGrid = document.createElement('div');
    colorGrid.style.display = 'grid';
    colorGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    colorGrid.style.gap = '8px';

    // Add color options
    Object.keys(shapeGradients).forEach(key => {
        const colorBtn = document.createElement('button');
        colorBtn.style.width = '55px';
        colorBtn.style.height = '55px';
        colorBtn.style.border = '2px solid #ddd';
        colorBtn.style.borderRadius = '8px';
        colorBtn.style.background = shapeGradients[key];
        colorBtn.style.cursor = 'pointer';
        colorBtn.style.transition = 'all 0.2s';
        colorBtn.style.position = 'relative';
        colorBtn.title = key.charAt(0).toUpperCase() + key.slice(1);

        // Add label
        const label = document.createElement('div');
        label.textContent = key;
        label.style.fontSize = '9px';
        label.style.color = 'white';
        label.style.textShadow = '0 1px 2px rgba(0,0,0,0.8)';
        label.style.position = 'absolute';
        label.style.bottom = '2px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.fontWeight = 'bold';
        label.style.textTransform = 'capitalize';
        colorBtn.appendChild(label);

        colorBtn.addEventListener('mouseover', () => {
            colorBtn.style.transform = 'scale(1.1)';
            colorBtn.style.borderColor = '#666';
        });

        colorBtn.addEventListener('mouseout', () => {
            colorBtn.style.transform = 'scale(1)';
            colorBtn.style.borderColor = '#ddd';
        });

        colorBtn.addEventListener('click', () => {
            // Function to apply gradient to a card
            const applyGradientToCard = (card) => {
                // Remove any background-color to ensure gradient shows
                card.style.backgroundColor = '';

                // Apply gradient
                card.style.background = shapeGradients[key];
                card.style.backgroundImage = shapeGradients[key];

                card.dataset.gradient = key;
            };

            // Apply to the clicked card
            applyGradientToCard(shapeElement);

            // Check if this card is part of a couple and apply to both
            const familyBox = shapeElement.closest('.family-box');
            if (familyBox) {
                // Find all person cards in this couple
                const coupleCards = familyBox.querySelectorAll('.couple-container .person');
                coupleCards.forEach(card => {
                    if (card !== shapeElement) { // Don't apply twice to the same card
                        applyGradientToCard(card);
                    }
                });
            }

            menu.remove();
        });

        colorGrid.appendChild(colorBtn);
    });

    menu.appendChild(colorGrid);
    document.body.appendChild(menu);

    // Adjust position if menu goes off-screen
    const menuRect = menu.getBoundingClientRect();
    if (menuRect.right > window.innerWidth) {
        menu.style.left = (window.innerWidth - menuRect.width - 10) + 'px';
    }
    if (menuRect.bottom > window.innerHeight) {
        menu.style.top = (window.innerHeight - menuRect.height - 10) + 'px';
    }

    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 0);
}

// ============================================
// SHARE FUNCTIONS
// ============================================

// Share to WhatsApp
function shareToWhatsApp() {
    const pageUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out my family tree! 🌳 ');
    const url = `https://wa.me/?text=${text}${pageUrl}`;
    window.open(url, '_blank');
}

// Share to Facebook
function shareToFacebook() {
    const pageUrl = encodeURIComponent(window.location.href);
    const url = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    window.open(url, '_blank', 'width=600,height=400');
}

// Share to Instagram
function shareToInstagram() {
    // Instagram doesn't support direct link sharing from web
    alert('Instagram does not support direct web link sharing. Please copy the link using "Copy Link" and share it in your Instagram bio or post caption.');
}

// Share to Twitter
function shareToTwitter() {
    const text = encodeURIComponent('Check out my family tree! 🌳');
    const pageUrl = encodeURIComponent(window.location.href);
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}`;
    window.open(url, '_blank', 'width=600,height=400');
}

// Copy shareable link
function copyShareLink() {
    const url = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! ✓');
        }).catch(() => {
            fallbackCopyLink(url);
        });
    } else {
        fallbackCopyLink(url);
    }
}

function fallbackCopyLink(url) {
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('Link copied to clipboard! ✓');
    } catch (err) {
        alert('Failed to copy link. Please copy it manually: ' + url);
    }
    document.body.removeChild(textarea);
}

// ============================================
// PROPERTIES PANEL FUNCTIONS
// ============================================

// Open properties panel for a person
function openPropertiesPanel(personId) {
    currentCustomizePersonId = personId;
    const panel = document.getElementById('propertiesPanel');
    const panelContent = document.getElementById('panelContent');
    const treeContainer = document.getElementById('treeContainer');

    panel.classList.add('show');
    treeContainer.classList.add('panel-open');

    // Get current person's element - check both regular and spouse cards
    let personLi = document.querySelector(`li[data-id="${personId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') : null;

    // If not found, might be a spouse card (has data-id on the person div itself)
    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${personId}"]`);
    }

    // Also try finding in family boxes
    if (!personDiv) {
        personDiv = document.querySelector(`.spouse-person[data-id="${personId}"]`);
    }

    // Last resort - find any element with this data-id
    if (!personDiv) {
        personDiv = document.querySelector(`[data-id="${personId}"]`);
        if (personDiv && !personDiv.classList.contains('person')) {
            personDiv = null;
        }
    }

    if (!personDiv) {
        alert('Error: Could not find person element. Person ID: ' + personId);
        return;
    }

    // Get current data
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');
    const occupationElement = personDiv.querySelector('.occupation');
    const genderBadge = personDiv.querySelector('.gender-badge');

    // Try to get gender from multiple sources
    let gender = 'male';
    if (personLi && personLi.dataset.gender) {
        gender = personLi.dataset.gender;
    } else if (personDiv.dataset.gender) {
        gender = personDiv.dataset.gender;
    } else {
        // Try to detect from gender badge
        const genderText = genderBadge ? genderBadge.textContent : '';
        if (genderText === '♀') gender = 'female';
        else if (genderText === '♂') gender = 'male';
        else if (genderText === '⚥') gender = 'other';
    }

    const currentName = nameElement ? nameElement.textContent : '';
    const currentDates = datesElement ? datesElement.textContent : '';
    const currentOccupation = occupationElement ? occupationElement.textContent : '';
    const currentBgColor = personDiv.style.background || getComputedStyle(personDiv).background;
    const currentBorderColor = personDiv.style.borderColor || getComputedStyle(personDiv).borderColor;
    const currentTextColor = personDiv.style.color || getComputedStyle(personDiv).color;
    const currentShape = personDiv.className.match(/shape-(\w+)/)?.[1] || 'rounded';
    const existingLink = personDiv.dataset.link || '';
    const photoContainer = personDiv.querySelector('.photo-container');
    const existingPhoto = photoContainer ? photoContainer.querySelector('img') : null;
    const photoShape = photoContainer ? (photoContainer.className.match(/photo-shape-(\w+)/)?.[1] || 'circle') : 'circle';

    // Check if this is a spouse and get marriage date
    const isSpouse = personDiv.classList.contains('spouse-person');
    let currentMarriageDate = '';
    if (isSpouse) {
        const familyBox = personDiv.closest('.family-box');
        const marriageDateDiv = familyBox ? familyBox.querySelector('.marriage-date') : null;
        currentMarriageDate = marriageDateDiv ? marriageDateDiv.textContent : '';
    }

    // Get current font styles
    const nameFontFamily = nameElement ? (nameElement.style.fontFamily || personDiv.dataset.fontFamily || 'Arial') : 'Arial';
    const nameFontSize = nameElement ? (nameElement.style.fontSize || personDiv.dataset.fontSize || '16') : '16';
    const nameFontWeight = nameElement ? (nameElement.style.fontWeight || personDiv.dataset.fontWeight || '600') : '600';
    const textShadow = nameElement ? (nameElement.style.textShadow || personDiv.dataset.textShadow || 'none') : 'none';
    const hasTextShadow = textShadow !== 'none';

    // Build properties panel HTML
    panelContent.innerHTML = `
        <div class="property-section">
            <div class="property-label">${t('basicInfo')}</div>
            <div class="property-row">
                <div class="property-row-label">${t('name')}</div>
                <input type="text" class="property-input" id="propName" value="${currentName}" onchange="updatePropertyName()">
            </div>
            <div class="property-row">
                <div class="property-row-label">${t('dates')}</div>
                <input type="text" class="property-input" id="propDates" value="${currentDates}" placeholder="${t('datesPlaceholder')}" onchange="updatePropertyDates()">
            </div>
            <div class="property-row">
                <div class="property-row-label">${t('occupation')}</div>
                <input type="text" class="property-input" id="propOccupation" value="${currentOccupation}" placeholder="${t('occupationPlaceholder')}" onchange="updatePropertyOccupation()">
            </div>
            <div class="property-row">
                <div class="property-row-label">${t('gender')}</div>
                <select class="property-input" id="propGender" onchange="updatePropertyGender()">
                    <option value="male" ${gender === 'male' ? 'selected' : ''}>${t('male')}</option>
                    <option value="female" ${gender === 'female' ? 'selected' : ''}>${t('female')}</option>
                    <option value="other" ${gender === 'other' ? 'selected' : ''}>${t('other')}</option>
                </select>
            </div>
            ${isSpouse ? `
            <div class="property-row">
                <div class="property-row-label">Marriage Date</div>
                <input type="text" class="property-input" id="propMarriageDate" value="${currentMarriageDate}" placeholder="e.g., 1990 or June 15, 1990" onchange="updatePropertyMarriageDate()">
            </div>
            ` : ''}
        </div>

        ${globalShowPhotos ? `
        <div class="property-section" id="photoPropertySection">
            <div class="property-label">${t('photo')}</div>
            ${existingPhoto ? `
                <div style="text-align: center; margin-bottom: 15px;">
                    <img src="${existingPhoto.src}" style="width: 100px; height: 100px; object-fit: cover; border-radius: ${photoShape === 'circle' ? '50%' : photoShape === 'rounded' ? '10px' : '0'}; border: 2px solid #e0e0e0;">
                </div>
            ` : ''}
            <button class="btn-apply-link" onclick="document.getElementById('propPhotoUpload').click()" style="width: 100%; margin-bottom: 10px;">
                ${existingPhoto ? t('changePhoto') : t('uploadPhoto')}
            </button>
            <input type="file" id="propPhotoUpload" accept="image/*" style="display: none;" onchange="handlePropertyPhotoUpload(event)">
            ${existingPhoto ? `
                <button class="btn-reset-style" onclick="removePersonPhoto()">${t('removePhoto')}</button>
                <div class="property-label" style="margin-top: 20px;">${t('photoShape')}</div>
                <div class="shape-options" style="grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <button class="shape-btn ${photoShape === 'circle' ? 'active' : ''}" onclick="changePhotoShape('circle')" title="Circle">
                        <div class="shape-preview shape-circle" style="background: #4CAF50;"></div>
                    </button>
                    <button class="shape-btn ${photoShape === 'square' ? 'active' : ''}" onclick="changePhotoShape('square')" title="Square">
                        <div class="shape-preview shape-rectangle" style="background: #4CAF50;"></div>
                    </button>
                    <button class="shape-btn ${photoShape === 'rounded' ? 'active' : ''}" onclick="changePhotoShape('rounded')" title="Rounded">
                        <div class="shape-preview shape-rounded" style="background: #4CAF50;"></div>
                    </button>
                    <button class="shape-btn ${photoShape === 'heart' ? 'active' : ''}" onclick="changePhotoShape('heart')" title="Heart">
                        <div class="shape-preview-heart-simple"></div>
                    </button>
                    <button class="shape-btn ${photoShape === 'diamond' ? 'active' : ''}" onclick="changePhotoShape('diamond')" title="Diamond">
                        <div class="shape-preview-diamond" style="background: #FF9800;"></div>
                    </button>
                    <button class="shape-btn ${photoShape === 'star' ? 'active' : ''}" onclick="changePhotoShape('star')" title="Star">
                        <div class="shape-preview-star" style="background: #FFC107;"></div>
                    </button>
                </div>
            ` : ''}
        </div>
        ` : ''}

        <div class="property-section">
            <div class="property-label">${t('Frame shape')}</div>
            <div class="shape-options">
                <button class="shape-btn ${currentShape === 'rectangle' ? 'active' : ''}" onclick="changePropertyShape('rectangle')">
                    <div class="shape-preview shape-rectangle"></div>
                </button>
                <button class="shape-btn ${currentShape === 'rounded' ? 'active' : ''}" onclick="changePropertyShape('rounded')">
                    <div class="shape-preview shape-rounded"></div>
                </button>
                <button class="shape-btn ${currentShape === 'circle' ? 'active' : ''}" onclick="changePropertyShape('circle')">
                    <div class="shape-preview shape-circle"></div>
                </button>
                <button class="shape-btn ${currentShape === 'hexagon' ? 'active' : ''}" onclick="changePropertyShape('hexagon')">
                    <div class="shape-preview shape-hexagon"></div>
                </button>
                <button class="shape-btn ${currentShape === 'apple' ? 'active' : ''}" onclick="changePropertyShape('apple')">
                    <div class="shape-preview shape-apple"></div>
                </button>
                <button class="shape-btn ${currentShape === 'sunflower' ? 'active' : ''}" onclick="changePropertyShape('sunflower')">
                    <div class="shape-preview shape-sunflower"></div>
                </button>
                <button class="shape-btn ${currentShape === 'rose' ? 'active' : ''}" onclick="changePropertyShape('rose')">
                    <div class="shape-preview shape-rose"></div>
                </button>
            </div>
        </div>

        <div class="property-section">
            <div class="property-label">${t('colors')}</div>
            <div class="property-row">
                <div class="property-row-label">${t('fill')}</div>
                <input type="color" class="property-input" id="propBgColor" value="${rgbToHex(currentBgColor) || '#1976D2'}" onchange="updateBackgroundColor()">
            </div>
            <div class="property-row">
                <div class="property-row-label">${t('border')}</div>
                <input type="color" class="property-input" id="propBorderColor" value="${rgbToHex(currentBorderColor) || '#1976D2'}" onchange="updateBorderColor()">
            </div>
            <div class="property-row">
                <div class="property-row-label">${t('text')}</div>
                <input type="color" class="property-input" id="propTextColor" value="${rgbToHex(currentTextColor) || '#ffffff'}" onchange="updateTextColor()">
            </div>

            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
                <div class="property-row-label" style="margin-bottom: 8px; font-weight: 600;">Gradient Colors</div>

                <!-- Quick Presets -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 15px;">
                    ${Object.keys(shapeGradients).map(key => `
                        <button
                            onclick="event.stopPropagation(); applyGradientPreset('${key}');"
                            style="width: 100%; height: 40px; border: 2px solid #ddd; border-radius: 6px;
                                   background: ${shapeGradients[key]}; cursor: pointer; transition: all 0.2s;
                                   font-size: 9px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.8);
                                   font-weight: bold; text-transform: capitalize;"
                            onmouseover="this.style.transform='scale(1.05)'; this.style.borderColor='#666';"
                            onmouseout="this.style.transform='scale(1)'; this.style.borderColor='#ddd';"
                            title="${key.charAt(0).toUpperCase() + key.slice(1)}"
                        >${key}</button>
                    `).join('')}
                </div>

                <!-- Custom Gradient Builder -->
                <div style="background: #f9f9f9; padding: 12px; border-radius: 8px; border: 1px solid #eee;">
                    <div style="font-size: 12px; font-weight: 600; margin-bottom: 10px; color: #666;">Custom Gradient</div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                        <div>
                            <label style="display: block; font-size: 11px; margin-bottom: 4px; color: #666;">Color 1</label>
                            <input type="color" id="propGradColor1" value="#667eea"
                                   oninput="updateGradientPreview()"
                                   style="width: 100%; height: 35px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">
                        </div>
                        <div>
                            <label style="display: block; font-size: 11px; margin-bottom: 4px; color: #666;">Color 2</label>
                            <input type="color" id="propGradColor2" value="#764ba2"
                                   oninput="updateGradientPreview()"
                                   style="width: 100%; height: 35px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">
                        </div>
                    </div>

                    <div style="margin-bottom: 10px;">
                        <label style="display: block; font-size: 11px; margin-bottom: 4px; color: #666;">Direction</label>
                        <select id="propGradDirection" onchange="updateGradientPreview()"
                                style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 12px;">
                            <option value="135deg">Diagonal ↘</option>
                            <option value="90deg">Left to Right →</option>
                            <option value="180deg">Top to Bottom ↓</option>
                            <option value="45deg">Diagonal ↗</option>
                            <option value="270deg">Right to Left ←</option>
                            <option value="0deg">Bottom to Top ↑</option>
                        </select>
                    </div>

                    <div style="margin-bottom: 10px;">
                        <div id="propGradientPreview"
                             style="width: 100%; height: 50px; border: 1px solid #ddd; border-radius: 4px;
                                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                    </div>

                    <button onclick="event.stopPropagation(); applyCustomGradientFromPanel();"
                            style="width: 100%; padding: 8px; background: #667eea; color: white;
                                   border: none; border-radius: 4px; font-weight: 600; cursor: pointer;
                                   font-size: 12px; transition: background 0.2s;"
                            onmouseover="this.style.background='#5568d3';"
                            onmouseout="this.style.background='#667eea';">
                        Apply Custom Gradient
                    </button>
                </div>
            </div>
        </div>

        <div class="property-section">
            <div class="property-label">${t('link')}</div>
            <input type="url" class="property-input" id="propLink" value="${existingLink}" placeholder="https://example.com" style="margin-bottom: 10px;">
            <button class="btn-apply-link" onclick="updateLink()">
                ${existingLink ? t('updateLink') : t('addLinkBtn')}
            </button>
            ${existingLink ? `<button class="btn-reset-style" onclick="removePropertyLink()" style="margin-top: 10px;">${t('removeLink')}</button>` : ''}
        </div>

        <div class="property-section">
            <button class="btn-reset-style" onclick="resetPropertyStyle()">${t('resetAllStyles')}</button>
        </div>
    `;
}

// Update gradient preview in properties panel
function updateGradientPreview() {
    const color1 = document.getElementById('propGradColor1');
    const color2 = document.getElementById('propGradColor2');
    const direction = document.getElementById('propGradDirection');
    const preview = document.getElementById('propGradientPreview');

    if (color1 && color2 && direction && preview) {
        const gradient = `linear-gradient(${direction.value}, ${color1.value} 0%, ${color2.value} 100%)`;
        preview.style.background = gradient;
    }
}

// Apply custom gradient from properties panel
function applyCustomGradientFromPanel() {
    const color1 = document.getElementById('propGradColor1');
    const color2 = document.getElementById('propGradColor2');
    const direction = document.getElementById('propGradDirection');

    if (!color1 || !color2 || !direction) return;
    if (!currentCustomizePersonId) return;

    const customGradient = `linear-gradient(${direction.value}, ${color1.value} 0%, ${color2.value} 100%)`;

    let personDiv = getPersonDiv(currentCustomizePersonId);
    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    }

    if (personDiv) {
        // Function to apply gradient to a card
        const applyGradientToCard = (card) => {
            card.style.backgroundColor = '';
            card.style.background = customGradient;
            card.style.backgroundImage = customGradient;
            card.dataset.gradient = 'custom';
            animateChange(card);
        };

        // Apply to the clicked card
        applyGradientToCard(personDiv);

        // Check if this card is part of a couple and apply to both
        const familyBox = personDiv.closest('.family-box');
        if (familyBox) {
            const coupleCards = familyBox.querySelectorAll('.couple-container .person');
            coupleCards.forEach(card => {
                if (card !== personDiv) {
                    applyGradientToCard(card);
                }
            });
        }
    }
}

// Apply gradient preset from properties panel
function applyGradientPreset(gradientKey) {
    if (!currentCustomizePersonId) {
        console.error('No currentCustomizePersonId set');
        return;
    }

    console.log('Applying gradient:', gradientKey, 'to person ID:', currentCustomizePersonId);

    // Try multiple ways to find the person div
    let personDiv = getPersonDiv(currentCustomizePersonId);

    // If not found, try direct query by data-id (works for spouse cards)
    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
        console.log('Found via direct query:', personDiv);
    }

    // If still not found, try finding in spouse containers
    if (!personDiv) {
        personDiv = document.querySelector(`.spouse-person[data-id="${currentCustomizePersonId}"]`);
        console.log('Found via spouse query:', personDiv);
    }

    if (!personDiv) {
        console.error('Could not find person div for ID:', currentCustomizePersonId);
        alert('Could not find person card. Please try clicking on the card again.');
        return;
    }

    if (shapeGradients[gradientKey]) {
        console.log('Applying gradient:', shapeGradients[gradientKey]);

        // Function to apply gradient to a card
        const applyGradientToCard = (card) => {
            // Remove any background-color to ensure gradient shows
            card.style.backgroundColor = '';

            // Apply gradient using backgroundImage for better compatibility
            card.style.background = shapeGradients[gradientKey];
            card.style.backgroundImage = shapeGradients[gradientKey];

            card.dataset.gradient = gradientKey;
            animateChange(card);
        };

        // Apply to the clicked card
        applyGradientToCard(personDiv);

        // Check if this card is part of a couple and apply to both
        const familyBox = personDiv.closest('.family-box');
        if (familyBox) {
            // Find all person cards in this couple
            const coupleCards = familyBox.querySelectorAll('.couple-container .person');
            coupleCards.forEach(card => {
                if (card !== personDiv) { // Don't apply twice to the same card
                    applyGradientToCard(card);
                }
            });
        }

        console.log('Applied. Current style:', personDiv.style.background);
    } else {
        console.error('Gradient key not found:', gradientKey);
    }
}

// Update font family
function updateFontFamily() {
    if (!currentCustomizePersonId) return;

    const personDiv = getPersonDiv(currentCustomizePersonId);
    if (!personDiv) return;

    const fontFamily = document.getElementById('propFontFamily').value;

    // Apply to all text elements
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');
    const occupationElement = personDiv.querySelector('.occupation');

    if (nameElement) nameElement.style.fontFamily = fontFamily;
    if (datesElement) datesElement.style.fontFamily = fontFamily;
    if (occupationElement) occupationElement.style.fontFamily = fontFamily;

    personDiv.dataset.fontFamily = fontFamily;
    animateChange(personDiv);
}

// Update font size
function updateFontSize(value) {
    if (!currentCustomizePersonId) return;

    const personDiv = getPersonDiv(currentCustomizePersonId);
    if (!personDiv) return;

    const fontSize = value + 'px';
    const nameElement = personDiv.querySelector('.name');

    if (nameElement) {
        nameElement.style.fontSize = fontSize;
    }

    personDiv.dataset.fontSize = value;

    // Update display value
    const fontSizeDisplay = document.getElementById('fontSizeValue');
    if (fontSizeDisplay) {
        fontSizeDisplay.textContent = fontSize;
    }

    animateChange(personDiv);
}

// Update font weight
function updateFontWeight() {
    if (!currentCustomizePersonId) return;

    const personDiv = getPersonDiv(currentCustomizePersonId);
    if (!personDiv) return;

    const fontWeight = document.getElementById('propFontWeight').value;

    // Apply to all text elements
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');
    const occupationElement = personDiv.querySelector('.occupation');

    if (nameElement) nameElement.style.fontWeight = fontWeight;
    if (datesElement) datesElement.style.fontWeight = fontWeight;
    if (occupationElement) occupationElement.style.fontWeight = fontWeight;

    personDiv.dataset.fontWeight = fontWeight;
    animateChange(personDiv);
}

// Toggle text shadow
function toggleTextShadow() {
    if (!currentCustomizePersonId) return;

    const personDiv = getPersonDiv(currentCustomizePersonId);
    if (!personDiv) return;

    const textShadowToggle = document.getElementById('propTextShadow');
    const hasTextShadow = textShadowToggle.checked;
    const textShadow = hasTextShadow ? '2px 2px 4px rgba(0, 0, 0, 0.5)' : 'none';

    // Apply to all text elements
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');
    const occupationElement = personDiv.querySelector('.occupation');

    if (nameElement) nameElement.style.textShadow = textShadow;
    if (datesElement) datesElement.style.textShadow = textShadow;
    if (occupationElement) occupationElement.style.textShadow = textShadow;

    personDiv.dataset.textShadow = textShadow;
    animateChange(personDiv);
}

// Helper function to get person div
function getPersonDiv(personId) {
    let personLi = document.querySelector(`li[data-id="${personId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') : null;

    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${personId}"]`);
    }

    return personDiv;
}

// Show floating font menu
function showFloatingFontMenu(textElement, event) {
    event.stopPropagation();

    const menu = document.getElementById('floatingFontMenu');
    const personCard = textElement.closest('.person');

    if (!personCard) return;

    // Get person ID
    currentFontPersonId = personCard.dataset.id;
    if (!currentFontPersonId) {
        const personLi = personCard.closest('li[data-id]');
        currentFontPersonId = personLi ? personLi.dataset.id : null;
    }

    if (!currentFontPersonId) return;

    currentTextElement = textElement;

    // Get current styles from the specific element
    const computedStyle = window.getComputedStyle(textElement);
    const fontFamily = textElement.style.fontFamily || textElement.dataset.fontFamily || computedStyle.fontFamily.split(',')[0].replace(/['"]/g, '') || 'Arial';
    const fontSize = parseInt(textElement.style.fontSize || textElement.dataset.fontSize || computedStyle.fontSize || '16');
    const fontWeight = textElement.style.fontWeight || textElement.dataset.fontWeight || computedStyle.fontWeight || '400';
    const fontStyle = textElement.style.fontStyle || computedStyle.fontStyle || 'normal';
    const textDecoration = textElement.style.textDecoration || computedStyle.textDecoration || 'none';
    const textShadow = textElement.style.textShadow || textElement.dataset.textShadow || computedStyle.textShadow || 'none';
    const textColor = textElement.style.color || computedStyle.color || '#ffffff';

    // Update toolbar controls
    document.getElementById('floatFontFamily').value = fontFamily.replace(/['"]/g, '');
    document.getElementById('floatFontSize').value = fontSize;

    // Update button states
    const isBold = fontWeight === '700' || fontWeight === 'bold' || fontWeight === '900';
    const btnBold = document.getElementById('btnBold');
    if (btnBold) {
        if (isBold) btnBold.classList.add('active');
        else btnBold.classList.remove('active');
    }

    const btnItalic = document.getElementById('btnItalic');
    if (btnItalic) {
        if (fontStyle === 'italic') btnItalic.classList.add('active');
        else btnItalic.classList.remove('active');
    }

    const btnUnderline = document.getElementById('btnUnderline');
    if (btnUnderline) {
        if (textDecoration.includes('underline')) btnUnderline.classList.add('active');
        else btnUnderline.classList.remove('active');
    }

    const btnShadow = document.getElementById('btnShadow');
    if (btnShadow) {
        if (textShadow !== 'none') btnShadow.classList.add('active');
        else btnShadow.classList.remove('active');
    }

    // Set color picker - convert RGB to hex if needed
    let hexColor = '#ffffff';
    if (textColor.startsWith('rgb')) {
        hexColor = rgbToHex(textColor) || '#ffffff';
    } else if (textColor.startsWith('#')) {
        hexColor = textColor;
    } else {
        // Try to convert named colors or use white as fallback
        hexColor = rgbToHex(textColor) || '#ffffff';
    }

    // Update hidden color input for native picker
    document.getElementById('floatTextColor').value = hexColor;

    // Update color bar indicator
    const colorBar = document.getElementById('colorBar');
    if (colorBar) {
        colorBar.style.background = hexColor;
        colorBar.style.borderColor = hexColor;
    }

    // Position menu near the clicked text
    const rect = textElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Show menu to measure its actual dimensions
    menu.style.visibility = 'hidden';
    menu.classList.add('show');
    const menuRect = menu.getBoundingClientRect();
    const menuWidth = menuRect.width || 350;
    const menuHeight = menuRect.height || 60;

    // Calculate position relative to document (below the text element)
    let top = rect.bottom + scrollTop + 10;
    let left = rect.left + scrollLeft;

    // Center menu horizontally relative to the text element
    left = rect.left + scrollLeft + (rect.width / 2) - (menuWidth / 2);

    // Keep menu within viewport horizontally
    if (left + menuWidth > window.innerWidth + scrollLeft) {
        left = window.innerWidth + scrollLeft - menuWidth - 10;
    }

    // Ensure minimum left position
    if (left < scrollLeft + 10) {
        left = scrollLeft + 10;
    }

    // Keep menu within viewport vertically
    if (rect.bottom + menuHeight + 20 > window.innerHeight) {
        // Show above if not enough space below
        top = rect.top + scrollTop - menuHeight - 10;
    }

    menu.style.top = top + 'px';
    menu.style.left = left + 'px';
    menu.style.visibility = 'visible';
}

// Close floating font menu
function closeFontMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('floatingFontMenu');
    menu.classList.remove('show');
    currentTextElement = null;
    currentFontPersonId = null;
}

// Apply font styles from floating toolbar
function applyFloatFont(event) {
    if (event) event.stopPropagation();
    if (!currentTextElement || !currentFontPersonId) return;

    const personDiv = getPersonDiv(currentFontPersonId);
    if (!personDiv) return;

    const fontFamily = document.getElementById('floatFontFamily').value;
    const fontSize = document.getElementById('floatFontSize').value;
    const textColor = document.getElementById('floatTextColor').value;

    console.log('Applying styles:', { fontFamily, fontSize, textColor });

    // Apply styles to the currently selected text element
    if (fontFamily) {
        currentTextElement.style.fontFamily = fontFamily;
        currentTextElement.dataset.fontFamily = fontFamily;
    }

    if (fontSize) {
        currentTextElement.style.fontSize = fontSize + 'px';
        currentTextElement.dataset.fontSize = fontSize;
    }

    if (textColor) {
        currentTextElement.style.color = textColor;
        currentTextElement.dataset.textColor = textColor;
    }

    animateChange(personDiv);
}

// Toggle Bold
function toggleBold(event) {
    if (event) event.stopPropagation();
    if (!currentTextElement) return;

    const btnBold = document.getElementById('btnBold');
    const isBold = btnBold.classList.contains('active');

    if (isBold) {
        currentTextElement.style.fontWeight = '400';
        btnBold.classList.remove('active');
    } else {
        currentTextElement.style.fontWeight = '700';
        btnBold.classList.add('active');
    }

    currentTextElement.dataset.fontWeight = currentTextElement.style.fontWeight;
}

// Toggle Italic
function toggleItalic(event) {
    if (event) event.stopPropagation();
    if (!currentTextElement) return;

    const btnItalic = document.getElementById('btnItalic');
    const isItalic = btnItalic.classList.contains('active');

    if (isItalic) {
        currentTextElement.style.fontStyle = 'normal';
        btnItalic.classList.remove('active');
    } else {
        currentTextElement.style.fontStyle = 'italic';
        btnItalic.classList.add('active');
    }
}

// Toggle Underline
function toggleUnderline(event) {
    if (event) event.stopPropagation();
    if (!currentTextElement) return;

    const btnUnderline = document.getElementById('btnUnderline');
    const isUnderline = btnUnderline.classList.contains('active');

    if (isUnderline) {
        currentTextElement.style.textDecoration = 'none';
        btnUnderline.classList.remove('active');
    } else {
        currentTextElement.style.textDecoration = 'underline';
        btnUnderline.classList.add('active');
    }
}

// Toggle Text Shadow (from toolbar button)
function toggleTextShadow(event) {
    if (event) event.stopPropagation();
    if (!currentTextElement) return;

    const btnShadow = document.getElementById('btnShadow');
    const hasShadow = btnShadow.classList.contains('active');

    if (hasShadow) {
        currentTextElement.style.textShadow = 'none';
        btnShadow.classList.remove('active');
        currentTextElement.dataset.textShadow = 'none';
    } else {
        currentTextElement.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        btnShadow.classList.add('active');
        currentTextElement.dataset.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    }
}

// Toggle global photo visibility
function toggleGlobalPhotos() {
    const photoToggle = document.getElementById('globalPhotoToggle');
    globalShowPhotos = photoToggle.checked;

    // Show/hide all photo containers and add/remove centering class
    const allPersonCards = document.querySelectorAll('.person');
    allPersonCards.forEach(personCard => {
        const photoContainer = personCard.querySelector('.photo-container');
        if (photoContainer) {
            if (globalShowPhotos) {
                photoContainer.style.display = '';
                personCard.classList.remove('no-photo');
            } else {
                photoContainer.style.display = 'none';
                personCard.classList.add('no-photo');
            }
        }
    });

    // Show/hide modal photo section if modal is open
    const modalPhotoSection = document.getElementById('modalPhotoSection');
    if (modalPhotoSection) {
        modalPhotoSection.style.display = globalShowPhotos ? 'block' : 'none';
    }

    // If properties panel is open, refresh it
    if (currentCustomizePersonId) {
        openPropertiesPanel(currentCustomizePersonId);
    }

    // Store preference in localStorage
    localStorage.setItem('globalShowPhotos', globalShowPhotos);
}

// Close properties panel
function closePropertiesPanel() {
    const panel = document.getElementById('propertiesPanel');
    const treeContainer = document.getElementById('treeContainer');

    panel.classList.remove('show');
    treeContainer.classList.remove('panel-open');
    currentCustomizePersonId = null;

    // Show default content
    document.getElementById('panelContent').innerHTML = `
        <div class="no-selection">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            </svg>
            <p>${t('clickToEdit')}</p>
        </div>
    `;
}

// Update name from properties panel
function updatePropertyName() {
    if (!currentCustomizePersonId) return;
    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    if (!personDiv) return;

    const nameElement = personDiv.querySelector('.name');
    const newName = document.getElementById('propName').value;
    if (nameElement && newName) {
        nameElement.textContent = newName;
        animateChange(personDiv);
    }
}

// Update dates from properties panel
function updatePropertyDates() {
    if (!currentCustomizePersonId) return;
    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    if (!personDiv) return;

    let datesElement = personDiv.querySelector('.dates');
    const newDates = document.getElementById('propDates').value;

    if (newDates) {
        if (!datesElement) {
            datesElement = document.createElement('div');
            datesElement.className = 'dates';
            const genderBadge = personDiv.querySelector('.gender-badge');
            genderBadge.insertAdjacentElement('afterend', datesElement);
        }
        datesElement.textContent = newDates;
    } else if (datesElement) {
        datesElement.remove();
    }
    animateChange(personDiv);
}

// Update occupation from properties panel
function updatePropertyOccupation() {
    if (!currentCustomizePersonId) return;
    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    if (!personDiv) return;

    let occupationElement = personDiv.querySelector('.occupation');
    const newOccupation = document.getElementById('propOccupation').value;

    if (newOccupation) {
        if (!occupationElement) {
            occupationElement = document.createElement('div');
            occupationElement.className = 'occupation';
            const lastElement = personDiv.querySelector('.dates') || personDiv.querySelector('.gender-badge');
            lastElement.insertAdjacentElement('afterend', occupationElement);
        }
        occupationElement.textContent = newOccupation;
    } else if (occupationElement) {
        occupationElement.remove();
    }
    animateChange(personDiv);
}

// Update marriage date from properties panel
function updatePropertyMarriageDate() {
    if (!currentCustomizePersonId) return;
    const personDiv = document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    if (!personDiv) return;

    const familyBox = personDiv.closest('.family-box');
    if (!familyBox) return;

    const newMarriageDate = document.getElementById('propMarriageDate').value;
    let marriageDateDiv = familyBox.querySelector('.marriage-date');

    if (newMarriageDate) {
        if (!marriageDateDiv) {
            marriageDateDiv = document.createElement('div');
            marriageDateDiv.className = 'marriage-date';
            familyBox.appendChild(marriageDateDiv);
        }
        marriageDateDiv.textContent = newMarriageDate;
    } else if (marriageDateDiv) {
        marriageDateDiv.remove();
    }
    animateChange(personDiv);
}

// Update gender from properties panel
function updatePropertyGender() {
    if (!currentCustomizePersonId) return;
    let personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') : null;

    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);
    }

    if (!personDiv) return;

    const newGender = document.getElementById('propGender').value;
    const genderBadge = personDiv.querySelector('.gender-badge');

    // Update gender in both places
    if (personLi) {
        personLi.dataset.gender = newGender;
    }
    personDiv.dataset.gender = newGender;

    personDiv.classList.remove('gender-male', 'gender-female', 'gender-other');
    personDiv.classList.add(`gender-${newGender}`);

    if (genderBadge) {
        genderBadge.textContent = genderSymbols[newGender];
    }
    animateChange(personDiv);
}

// Change person card shape from properties panel
function changePropertyShape(shape) {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    // Remove existing shape classes
    personDiv.classList.remove('shape-rectangle', 'shape-rounded', 'shape-circle', 'shape-hexagon', 'shape-apple', 'shape-sunflower', 'shape-rose');

    // Add new shape class
    personDiv.classList.add(`shape-${shape}`);

    // Update active button in properties panel
    document.querySelectorAll('#panelContent .shape-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.shape-btn').classList.add('active');

    // Animate the change
    animateChange(personDiv);

    // Also update spouse's card shape
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        // Current person might be a spouse themselves
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        spouseDiv.classList.remove('shape-rectangle', 'shape-rounded', 'shape-circle', 'shape-hexagon', 'shape-apple', 'shape-sunflower', 'shape-rose');
        spouseDiv.classList.add(`shape-${shape}`);
        animateChange(spouseDiv);
    }
}

// Update background color from properties panel
function updateBackgroundColor() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const color = document.getElementById('propBgColor').value;
    personDiv.style.background = color;
    personDiv.dataset.customBg = color;

    animateChange(personDiv);

    // Also update spouse's background color
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        spouseDiv.style.background = color;
        spouseDiv.dataset.customBg = color;
        animateChange(spouseDiv);
    }
}

// Update border color from properties panel
function updateBorderColor() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const color = document.getElementById('propBorderColor').value;
    personDiv.style.borderColor = color;
    personDiv.dataset.customBorder = color;

    animateChange(personDiv);

    // Also update spouse's border color
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        spouseDiv.style.borderColor = color;
        spouseDiv.dataset.customBorder = color;
        animateChange(spouseDiv);
    }
}

// Update text color from properties panel
function updateTextColor() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const color = document.getElementById('propTextColor').value;
    personDiv.style.color = color;

    // Apply to all text elements
    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');

    if (nameElement) nameElement.style.color = color;
    if (datesElement) datesElement.style.color = color;

    personDiv.dataset.customText = color;

    animateChange(personDiv);

    // Also update spouse's text color
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        spouseDiv.style.color = color;
        const spouseNameElement = spouseDiv.querySelector('.name');
        const spouseDatesElement = spouseDiv.querySelector('.dates');
        if (spouseNameElement) spouseNameElement.style.color = color;
        if (spouseDatesElement) spouseDatesElement.style.color = color;
        spouseDiv.dataset.customText = color;
        animateChange(spouseDiv);
    }
}

// Update link from properties panel
function updateLink() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    const link = document.getElementById('propLink').value.trim();

    if (!link) {
        alert('Please enter a valid URL');
        return;
    }

    // Validate URL
    try {
        new URL(link);
    } catch (e) {
        alert('Please enter a valid URL (e.g., https://example.com)');
        return;
    }

    personDiv.dataset.link = link;
    personDiv.classList.add('has-link');

    // Make card clickable
    personDiv.style.cursor = 'pointer';
    personDiv.onclick = function(e) {
        // Don't open link if clicking action buttons or if opening properties
        if (!e.target.closest('.actions')) {
            window.open(link, '_blank');
        }
    };

    animateChange(personDiv);

    // Refresh properties panel to show "Remove Link" button
    openPropertiesPanel(currentCustomizePersonId);
}

// Remove link from properties panel
function removePropertyLink() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    delete personDiv.dataset.link;
    personDiv.classList.remove('has-link');
    personDiv.onclick = null;
    personDiv.style.cursor = '';

    animateChange(personDiv);

    // Refresh properties panel
    openPropertiesPanel(currentCustomizePersonId);
}

// Reset person style from properties panel
function resetPropertyStyle() {
    if (!currentCustomizePersonId) return;

    const personLi = document.querySelector(`li[data-id="${currentCustomizePersonId}"]`);
    const personDiv = personLi ? personLi.querySelector('.person') :
                      document.querySelector(`.person[data-id="${currentCustomizePersonId}"]`);

    if (!personDiv) return;

    // Reset shape
    personDiv.classList.remove('shape-rectangle', 'shape-rounded', 'shape-circle', 'shape-hexagon', 'shape-apple', 'shape-sunflower', 'shape-rose');
    personDiv.classList.add('shape-rounded');

    // Reset colors
    personDiv.style.background = '';
    personDiv.style.borderColor = '';
    personDiv.style.color = '';

    const nameElement = personDiv.querySelector('.name');
    const datesElement = personDiv.querySelector('.dates');

    if (nameElement) nameElement.style.color = '';
    if (datesElement) datesElement.style.color = '';

    // Clear custom data attributes
    delete personDiv.dataset.customBg;
    delete personDiv.dataset.customBorder;
    delete personDiv.dataset.customText;

    animateChange(personDiv);

    // Also reset spouse's style
    let spouseDiv = getSpouseDiv(currentCustomizePersonId);
    if (!spouseDiv) {
        spouseDiv = getSpousePartnerDiv(currentCustomizePersonId);
    }

    if (spouseDiv) {
        // Reset spouse shape
        spouseDiv.classList.remove('shape-rectangle', 'shape-rounded', 'shape-circle', 'shape-hexagon', 'shape-apple', 'shape-sunflower', 'shape-rose');
        spouseDiv.classList.add('shape-rounded');

        // Reset spouse colors
        spouseDiv.style.background = '';
        spouseDiv.style.borderColor = '';
        spouseDiv.style.color = '';

        const spouseNameElement = spouseDiv.querySelector('.name');
        const spouseDatesElement = spouseDiv.querySelector('.dates');

        if (spouseNameElement) spouseNameElement.style.color = '';
        if (spouseDatesElement) spouseDatesElement.style.color = '';

        // Clear spouse custom data attributes
        delete spouseDiv.dataset.customBg;
        delete spouseDiv.dataset.customBorder;
        delete spouseDiv.dataset.customText;

        animateChange(spouseDiv);
    }

    // Refresh properties panel
    openPropertiesPanel(currentCustomizePersonId);
}

// Animate style change
function animateChange(element) {
    element.style.transform = 'scale(1.1)';
    element.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6)';

    setTimeout(() => {
        element.style.transform = '';
        element.style.boxShadow = '';
    }, 300);
}

// Convert RGB to Hex color
function rgbToHex(rgb) {
    if (!rgb || rgb.startsWith('#')) return rgb;

    const rgbMatch = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!rgbMatch) return rgb;

    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Make person cards clickable to open properties panel
document.addEventListener('click', function(event) {
    const personCard = event.target.closest('.person');

    // Don't open panel if clicking on menu button, menu items, or inside menu
    if (event.target.closest('.card-menu-btn') ||
        event.target.closest('.card-menu') ||
        event.target.closest('.menu-item')) {
        return;
    }

    // Only open panel if clicking on the card
    if (personCard) {
        // Check if this card has a link and user clicked on the photo/name area
        if (personCard.dataset.link && !event.target.closest('.photo-container, .name')) {
            return; // Let the link handler take over
        }

        // IMPORTANT: Check the card's own data-id FIRST (for spouse cards)
        // Spouse cards have data-id on the div itself and are inside parent's li
        let personId = personCard.dataset.id; // Try card's own ID first

        // If card doesn't have its own ID, look for parent li (regular person)
        if (!personId) {
            const personLi = personCard.closest('li[data-id]');
            personId = personLi ? personLi.dataset.id : null;
        }

        // Comprehensive debug log
        console.log('=== PERSON CARD CLICKED ===');
        console.log('DIV ID (checked first):', personCard.dataset.id);
        console.log('Final ID:', personId);
        console.log('Is spouse:', personCard.classList.contains('spouse-person'));
        console.log('Card classes:', personCard.className);
        console.log('========================');

        if (personId) {
            console.log('✅ Opening properties panel for ID:', personId);
            openPropertiesPanel(personId);
            event.stopPropagation();
        } else {
            console.error('❌ NO PERSON ID FOUND!');
            console.error('PersonCard element:', personCard);
            console.error('PersonCard HTML:', personCard.outerHTML.substring(0, 200));
            alert('Error: Could not find person ID. Check console for details.');
        }
    } else {
        console.log('Click was not on a person card');
    }
});

// Console helper message
console.log('%cFamily Tree Interactive Features:', 'font-size: 16px; font-weight: bold; color: #667eea;');
console.log('- exportTreeData() - Export the entire tree structure as JSON');
console.log('- exportAsImage() - Export family tree as PNG image');
console.log('- exportAsPDF() - Export family tree as PDF document');
console.log('- countFamilyMembers() - Get total number of family members');
console.log('- getFamilyMember(id) - Get details of a specific family member');
console.log('- searchFamily("term") - Highlight family members matching the search term');


// ============================================
// LANGUAGE SWITCHING FUNCTION
// ============================================

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update toolbar title
    const toolbarTitle = document.querySelector(".toolbar-title");
    if (toolbarTitle) toolbarTitle.textContent = t("familyTreeTemplate");
    
    // Update Export and Share buttons
    const exportBtn = document.querySelector(".btn-export-toolbar");
    if (exportBtn) exportBtn.textContent = t("export");
    
    const shareBtn = document.querySelector(".btn-share-toolbar");
    if (shareBtn) shareBtn.textContent = t("share");
    
    // Update modal title if it's open
    const modalTitle = document.getElementById("modalTitle");
    if (modalTitle && modal.style.display === "block") {
        if (isEditMode) {
            modalTitle.textContent = t("editPersonInfo");
        } else if (isSpouseMode) {
            modalTitle.textContent = t("addSpouse");
        } else {
            modalTitle.textContent = t("addNewFamilyMember");
        }
    }
    
    // Update form labels
    const nameLabel = document.querySelector("label[for='personName']");
    if (nameLabel) nameLabel.textContent = t("name") + ":";
    
    const genderLabel = document.querySelector("label[for='personGender']");
    if (genderLabel) genderLabel.textContent = t("gender") + ":";
    
    const datesLabel = document.querySelector("label[for='personDates']");
    if (datesLabel) datesLabel.textContent = t("dates") + " (" + t("datesPlaceholder") + "):";
    
    const occupationLabel = document.querySelector("label[for='personOccupation']");
    if (occupationLabel) occupationLabel.textContent = t("occupation") + ":";
    
    // Update gender select options
    const genderSelect = document.getElementById("personGender");
    if (genderSelect && genderSelect.options.length > 0) {
        genderSelect.options[0].textContent = t("selectGender");
        genderSelect.options[1].textContent = t("male");
        genderSelect.options[2].textContent = t("female");
        genderSelect.options[3].textContent = t("other");
    }
    
    // Update placeholders
    const datesInput = document.getElementById("personDates");
    if (datesInput) datesInput.placeholder = t("datesPlaceholder");
    
    const occupationInput = document.getElementById("personOccupation");
    if (occupationInput) occupationInput.placeholder = t("occupationPlaceholder");
    
    // Update submit button
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        if (isEditMode) {
            submitBtn.textContent = t("updatePerson");
        } else {
            submitBtn.textContent = t("addPerson");
        }
    }
    
    // Update cancel button
    const cancelBtns = document.querySelectorAll(".btn-cancel");
    cancelBtns.forEach(btn => btn.textContent = t("cancel"));
    
    // Update properties panel title
    const panelTitle = document.querySelector(".panel-title");
    if (panelTitle) panelTitle.textContent = t("properties");

    // Update properties panel fields if open
    if (currentCustomizePersonId) {
        // Re-open the properties panel to refresh content with new language
        openPropertiesPanel(currentCustomizePersonId);
    }

    // Store language preference
    localStorage.setItem("familyTreeLanguage", lang);

    console.log("Language changed to:", lang);
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem("familyTreeLanguage");
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.getElementById("languageSelector").value = savedLanguage;
        changeLanguage(savedLanguage);
    }
});
