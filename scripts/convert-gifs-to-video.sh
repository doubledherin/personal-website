#!/bin/bash
# scripts/convert-gifs-to-video.sh

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎬 GIF to MP4 Converter${NC}"
echo "This script will:"
echo "1. Move original GIFs to assets/originals/ (backup)"
echo "2. Convert GIFs to optimized MP4 videos"
echo "3. Save MP4s in assets/ (replacing the GIFs)"
echo ""

# Create backup directory for originals
mkdir -p assets/originals
mkdir -p assets/optimized

echo -e "${YELLOW}📁 Creating backup of original GIFs...${NC}"

# First, backup all GIF files
gif_count=0
for gif in assets/*.gif; do
  if [[ -f "$gif" ]]; then
    filename=$(basename "$gif")
    echo "  Backing up: $filename"
    cp "$gif" "assets/originals/$filename"
    ((gif_count++))
  fi
done

if [ $gif_count -eq 0 ]; then
  echo -e "${RED}❌ No GIF files found in assets/ directory${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Backed up $gif_count GIF files to assets/originals/${NC}"
echo ""

# Check if ffmpeg is available
if ! command -v ffmpeg &> /dev/null; then
  echo -e "${RED}❌ FFmpeg is not installed. Please install it first:${NC}"
  echo "  macOS: brew install ffmpeg"
  echo "  Ubuntu: sudo apt install ffmpeg"
  exit 1
fi

echo -e "${BLUE}🔄 Converting GIFs to MP4 videos...${NC}"
echo ""

# Convert each GIF to MP4
for gif in assets/*.gif; do
  if [[ -f "$gif" ]]; then
    filename=$(basename "$gif" .gif)
    echo -e "${YELLOW}Converting: ${filename}.gif${NC}"
    
    # Get original size before conversion (macOS compatible)
    original_size=$(du -h "$gif" | cut -f1)
    
    # High quality MP4 conversion
    ffmpeg -i "$gif" \
      -movflags faststart \
      -pix_fmt yuv420p \
      -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
      -c:v libx264 \
      -crf 18 \
      -preset medium \
      -an \
      -y "assets/${filename}.mp4" \
      -hide_banner -loglevel error
    
    if [ $? -eq 0 ]; then
      # Get new size after conversion (macOS compatible)
      new_size=$(du -h "assets/${filename}.mp4" | cut -f1)
      
      echo -e "${GREEN}  ✅ Success: ${original_size} → ${new_size}${NC}"
      
      # Remove the original GIF from assets/ (it's safely backed up)
      rm "$gif"
    else
      echo -e "${RED}  ❌ Failed to convert ${filename}.gif${NC}"
    fi
    echo ""
  fi
done

echo -e "${GREEN}🎉 Conversion complete!${NC}"
echo ""
echo -e "${BLUE}📊 Summary:${NC}"
echo "  📁 Original GIFs: safely stored in assets/originals/"
echo "  🎬 New MP4 videos: ready to use in assets/"
echo "  🌐 Update your HTML to use MP4 videos instead of GIFs"
echo ""
echo -e "${YELLOW}💡 Next steps:${NC}"
echo "  1. Update your HTML <img> tags to <video> tags"
echo "  2. Test your site to make sure videos work correctly"
echo "  3. If everything works, you can delete assets/originals/ later"
echo ""
echo -e "${BLUE}🔧 Need to restore originals? Run:${NC}"
echo "  cp assets/originals/*.gif assets/"