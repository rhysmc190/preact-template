FROM node:15-alpine AS UI_BUILD
ENV NODE_ENV dev
WORKDIR /usr/dev
COPY . ./preactapp/
RUN cd preactapp && npm install node-prune && var="#!/bin/sh" && sed -i "1s-.*-${var}-" ./node_modules/node-prune/prune.sh && npm run build

FROM node:15-alpine
ENV NODE_ENV prod
WORKDIR /usr/dev
COPY --from=UI_BUILD /usr/dev/preactapp/build ./build
COPY --from=UI_BUILD /usr/dev/preactapp/serve ./serve
COPY --from=UI_BUILD /usr/dev/preactapp/node_modules/node-prune/prune.sh ./serve/prune.sh
RUN cd serve && npm install && ./prune.sh && rm ./package*.json ./prune.sh

EXPOSE 3080

CMD ["node", "./serve"]
# to play around inside the container, comment above and un-comment below
# CMD ["/bin/sh"]