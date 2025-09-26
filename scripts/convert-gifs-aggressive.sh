#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🎬 Aggressive GIF to MP4 Converter${NC}"
echo "This will create much smaller files with good quality for web use"
echo ""

# Convert each existing MP4 to a smaller version
for mp4 in assets/*.mp4; do
  if [[ -f "$mp4" ]]; then
    filename=$(basename "$mp4" .mp4)
    echo -e "${YELLOW}Re-optimizing: ${filename}.mp4${NC}"
    
    # Get current size
    current_size=$(du -h "$mp4" | cut -f1)
    
    # Simple aggressive compression with even dimensions fix
    ffmpeg -i "$mp4" \
      -vf "scale=800:-2,fps=15" \
      -c:v libx264 \
      -crf 28 \
      -preset medium \
      -maxrate 1M \
      -bufsize 2M \
      -an \
      -y "assets/${filename}-optimized.mp4" \
      -hide_banner -loglevel error
    
    if [ $? -eq 0 ]; then
      # Get new size
      new_size=$(du -h "assets/${filename}-optimized.mp4" | cut -f1)
      
      echo -e "${GREEN}  ✅ Success: ${current_size} → ${new_size}${NC}"
      
      # Replace the original MP4 with optimized version
      mv "assets/${filename}-optimized.mp4" "$mp4"
    else
      echo -e "${RED}  ❌ Failed to optimize ${filename}.mp4${NC}"
    fi
    echo ""
  fi
done

echo -e "${GREEN}🎉 Aggressive optimization complete!${NC}"