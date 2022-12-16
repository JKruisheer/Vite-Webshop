FROM nginx:latest
COPY dist /usr/share/nginx/html/
## Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf