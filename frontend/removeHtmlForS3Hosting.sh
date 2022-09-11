# This is needed so that s3 can serve files without .html
# for i in $( ls frontend/out/*.html ); do mv $i ${i%.*}; done
find ./frontend/out -depth -name "*.html" -exec sh -c 'mv "$1" "${1%.html}"' _ {} \;
# find ./frontend/out -type f ! -iname 'index.html' -iname '*.html' -print0 | while read -d $'\0' f; do mv "$f" "${f%.html}"; done

mv frontend/out/index frontend/out/index.html