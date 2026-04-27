#!/bin/bash

# Script de validación para Google AdSense - Punk Medallo

echo "🔍 Validando configuración de Google AdSense..."
echo "=================================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar ads.txt
echo "1️⃣  Verificando ads.txt..."
if [ -f "public/ads.txt" ]; then
    echo -e "${GREEN}✅ ads.txt encontrado${NC}"
    echo "   Contenido:"
    cat public/ads.txt
else
    echo -e "${RED}❌ ads.txt NO encontrado${NC}"
fi
echo ""

# 2. Verificar que el script de AdSense está en index.html
echo "2️⃣  Verificando script de Google AdSense en index.html..."
if grep -q "pagead2.googlesyndication.com" public/index.html; then
    echo -e "${GREEN}✅ Script de AdSense encontrado${NC}"
else
    echo -e "${RED}❌ Script de AdSense NO encontrado${NC}"
fi
echo ""

# 3. Verificar componente GoogleAdsense
echo "3️⃣  Verificando componente GoogleAdsense..."
if [ -f "src/components/googleAdsense/index.js" ]; then
    echo -e "${GREEN}✅ Componente GoogleAdsense encontrado${NC}"
else
    echo -e "${RED}❌ Componente GoogleAdsense NO encontrado${NC}"
fi
echo ""

# 4. Verificar CSS del componente
echo "4️⃣  Verificando CSS del componente GoogleAdsense..."
if [ -f "src/components/googleAdsense/index.module.css" ]; then
    echo -e "${GREEN}✅ CSS del componente encontrado${NC}"
else
    echo -e "${RED}❌ CSS del componente NO encontrado${NC}"
fi
echo ""

# 5. Verificar que los anuncios están integrados en los layouts
echo "5️⃣  Verificando integración de anuncios en layouts..."
declare -a FILES=(
    "src/layouts/home/index.js"
    "src/layouts/blog/index.js"
    "src/layouts/about/index.js"
    "src/layouts/contact/index.js"
    "src/layouts/facebookPhotos/index.js"
    "src/layouts/instagramPhotos/index.js"
)

for file in "${FILES[@]}"; do
    if grep -q "GoogleAdsense" "$file"; then
        filename=$(basename "$file")
        echo -e "   ${GREEN}✅${NC} $filename - Anuncios integrados"
    else
        filename=$(basename "$file")
        echo -e "   ${RED}❌${NC} $filename - Sin anuncios"
    fi
done
echo ""

# 6. Verificar publisher ID
echo "6️⃣  Verificando publisher ID..."
if grep -q "pub-1745023730981943" src/components/googleAdsense/index.js; then
    echo -e "${GREEN}✅ Publisher ID encontrado${NC}"
    echo "   ID: pub-1745023730981943"
else
    echo -e "${RED}❌ Publisher ID NO encontrado${NC}"
fi
echo ""

# 7. Verificar que los iframes tienen sandbox attribute mejorado
echo "7️⃣  Verificando atributos sandbox en iframes..."
if grep -q "sandbox=\"allow-same-origin allow-scripts allow-popups allow-presentation\"" src/components/recentTrack/index.js; then
    echo -e "${GREEN}✅ RecentTrack iframe mejorado${NC}"
else
    echo -e "${YELLOW}⚠️  RecentTrack iframe podría necesitar revisión${NC}"
fi

if grep -q "allow-forms" src/components/songRequest/index.js; then
    echo -e "${GREEN}✅ SongRequest iframe mejorado${NC}"
else
    echo -e "${YELLOW}⚠️  SongRequest iframe podría necesitar revisión${NC}"
fi
echo ""

echo "=================================================="
echo "✅ Validación completada"
echo ""
echo "📋 Próximos pasos:"
echo "   1. Ejecutar: npm run build"
echo "   2. Verificar que ads.txt esté en /build/ads.txt"
echo "   3. Deploy a producción"
echo "   4. Verificar en Google Search Console"
echo "   5. Esperar revisión de Google AdSense (24-48 horas)"

