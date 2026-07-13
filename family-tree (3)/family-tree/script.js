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

// Toggle card menu
function toggleCardMenu(event, personId) {
    event.stopPropagation(); // Prevent opening properties panel

    const menuId = 'cardMenu' + personId;
    const menu = document.getElementById(menuId);

    if (!menu) return;

    // Close any other open menu
    if (currentOpenMenu && currentOpenMenu !== menu) {
        currentOpenMenu.classList.remove('show');
    }

    // Toggle current menu
    const isOpen = menu.classList.contains('show');
    if (isOpen) {
        menu.classList.remove('show');
        currentOpenMenu = null;
    } else {
        menu.classList.add('show');
        currentOpenMenu = menu;
    }
}

// Close card menu
function closeCardMenu() {
    if (currentOpenMenu) {
        currentOpenMenu.classList.remove('show');
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
    currentParentId = parentId;
    modalTitle.textContent = 'Add Child';
    submitBtn.textContent = 'Add Child';
    modal.style.display = 'block';
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

    // Show modal
    modalTitle.textContent = 'Edit Person Information';
    submitBtn.textContent = 'Update Person';
    modal.style.display = 'block';
}

// Add a spouse to a person
function addSpouse(personId) {
    isEditMode = false;
    isSpouseMode = true;
    currentParentId = personId;
    modalTitle.textContent = 'Add Spouse';
    submitBtn.textContent = 'Add Spouse';
    modal.style.display = 'block';
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
}

// Submit edited person
function submitEditPerson() {
    const name = document.getElementById('personName').value.trim();
    const gender = document.getElementById('personGender').value;
    const dates = document.getElementById('personDates').value.trim();
    const occupation = document.getElementById('personOccupation').value.trim();

    if (!name || !gender) {
        alert('Please fill in Name and Gender (required fields)');
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

    if (!name || !gender) {
        alert('Please fill in Name and Gender (required fields)');
        return;
    }

    if (isSpouseMode) {
        addSpouseToPerson(name, gender, dates, occupation);
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
function addSpouseToPerson(name, gender, dates, occupation) {
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
    let familyBox = personLi.querySelector('.family-box');
    if (!familyBox) {
        // Wrap the existing person in a family box
        familyBox = document.createElement('div');
        familyBox.className = 'family-box';

        const personsContainer = document.createElement('div');
        personsContainer.className = 'couple-container';

        // Move existing person card into the container
        const existingPerson = personLi.querySelector('.person');
        personsContainer.appendChild(existingPerson);

        familyBox.appendChild(personsContainer);
        personLi.insertBefore(familyBox, personLi.firstChild);
    }

    // Create spouse person card
    const spouseDiv = document.createElement('div');
    spouseDiv.className = `person level-${levelClass} gender-${gender} new-person spouse-person`;
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
        <div class="person level-${levelClass} gender-${gender} new-person">
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
                <button class="menu-item" onclick="addChild(${newId}); closeCardMenu()">
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
    const allPhotoContainers = document.querySelectorAll('.photo-container');
    allPhotoContainers.forEach(container => {
        if (!container.querySelector('img')) {
            container.classList.add('empty');
        }
    });

    // Check for existing spouse relationships on page load
    updateSpouseButtons();

    // Add click tooltips to person cards
    addClickTooltips();

    // Add 3-dot menu to all existing cards
    addMenuToExistingCards();

    // Ensure all spouse cards have data-id attributes
    ensureSpouseDataIds();
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

// Export tree as Image (PNG)
async function exportAsImage() {
    const treeElement = document.getElementById('familyTree');
    const exportBtn = document.querySelectorAll('.btn-export');

    // Hide action buttons temporarily
    const allActions = document.querySelectorAll('.actions');
    allActions.forEach(action => action.style.display = 'none');

    // Hide export buttons
    exportBtn.forEach(btn => btn.style.display = 'none');

    // Hide 3 dots menu buttons
    const menuButtons = document.querySelectorAll('.card-menu-btn');
    menuButtons.forEach(btn => btn.style.display = 'none');

    try {
        const canvas = await html2canvas(treeElement, {
            backgroundColor: '#ffffff',
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true
        });

        // Convert to blob and download
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `family-tree-${new Date().toISOString().split('T')[0]}.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });

        alert('Family tree exported as image successfully!');
    } catch (error) {
        console.error('Error exporting as image:', error);
        alert('Error exporting image. Please try again.');
    } finally {
        // Show action buttons again
        allActions.forEach(action => action.style.display = '');
        exportBtn.forEach(btn => btn.style.display = '');
        menuButtons.forEach(btn => btn.style.display = '');
    }
}

// Export tree as PDF
async function exportAsPDF() {
    const treeElement = document.getElementById('familyTree');
    const exportBtn = document.querySelectorAll('.btn-export');

    // Hide action buttons temporarily
    const allActions = document.querySelectorAll('.actions');
    allActions.forEach(action => action.style.display = 'none');

    // Hide export buttons
    exportBtn.forEach(btn => btn.style.display = 'none');

    // Hide 3 dots menu buttons
    const menuButtons = document.querySelectorAll('.card-menu-btn');
    menuButtons.forEach(btn => btn.style.display = 'none');

    try {
        const canvas = await html2canvas(treeElement, {
            backgroundColor: '#ffffff',
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: true
        });

        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;

        // Calculate PDF dimensions
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / imgHeight;

        // A4 size in landscape
        const pdf = new jsPDF({
            orientation: ratio > 1 ? 'landscape' : 'portrait',
            unit: 'px',
            format: [imgWidth / 2, imgHeight / 2]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth / 2, imgHeight / 2);
        pdf.save(`family-tree-${new Date().toISOString().split('T')[0]}.pdf`);

        alert('Family tree exported as PDF successfully!');
    } catch (error) {
        console.error('Error exporting as PDF:', error);
        alert('Error exporting PDF. Please try again.');
    } finally {
        // Show action buttons again
        allActions.forEach(action => action.style.display = '');
        exportBtn.forEach(btn => btn.style.display = '');
        menuButtons.forEach(btn => btn.style.display = '');
    }
}

// ============================================
// PROPERTIES PANEL FUNCTIONS
// ============================================

// Open properties panel for a person
function openPropertiesPanel(personId) {
    console.log('=== OPENING PROPERTIES PANEL ===');
    console.log('Person ID:', personId);

    currentCustomizePersonId = personId;
    const panel = document.getElementById('propertiesPanel');
    const panelContent = document.getElementById('panelContent');
    const treeContainer = document.getElementById('treeContainer');

    panel.classList.add('show');
    treeContainer.classList.add('panel-open');

    // Get current person's element - check both regular and spouse cards
    let personLi = document.querySelector(`li[data-id="${personId}"]`);
    let personDiv = personLi ? personLi.querySelector('.person') : null;

    console.log('Found via LI > .person:', !!personDiv);

    // If not found, might be a spouse card (has data-id on the person div itself)
    if (!personDiv) {
        personDiv = document.querySelector(`.person[data-id="${personId}"]`);
        console.log('Found via .person[data-id]:', !!personDiv);
    }

    // Also try finding in family boxes
    if (!personDiv) {
        personDiv = document.querySelector(`.spouse-person[data-id="${personId}"]`);
        console.log('Found via .spouse-person[data-id]:', !!personDiv);
    }

    // Last resort - find any element with this data-id
    if (!personDiv) {
        personDiv = document.querySelector(`[data-id="${personId}"]`);
        console.log('Found via [data-id] (any element):', !!personDiv);
        if (personDiv && !personDiv.classList.contains('person')) {
            console.warn('Found element but it\'s not a person card:', personDiv);
            personDiv = null;
        }
    }

    if (!personDiv) {
        console.error('❌ Person not found:', personId);
        console.error('Tried all selectors:');
        console.error('- li[data-id="'+personId+'"] > .person');
        console.error('- .person[data-id="'+personId+'"]');
        console.error('- .spouse-person[data-id="'+personId+'"]');
        alert('Error: Could not find person element. Person ID: ' + personId);
        return;
    }

    console.log('✅ Person element found:', personDiv);
    console.log('================================');

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
        </div>

        <div class="property-section">
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
