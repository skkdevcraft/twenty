import request from 'supertest';

const client = request(`http://localhost:${APP_PORT}`);

describe('favoritesResolver (integration)', () => {
  it('should find many favorites', () => {
    const queryData = {
      query: `
        query favorites {
          favorites {
            edges {
              node {
                position
                id
                createdAt
                updatedAt
                deletedAt
                workspaceMemberId
                personId
                companyId
                opportunityId
                taskId
                noteId
                viewId
              }
            }
          }
        }
      `,
    };

    return client
      .post('/graphql')
      .set('Authorization', `Bearer ${ACCESS_TOKEN}`)
      .send(queryData)
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toBeDefined();
        expect(res.body.errors).toBeUndefined();
      })
      .expect((res) => {
        const data = res.body.data.favorites;

        expect(data).toBeDefined();
        expect(Array.isArray(data.edges)).toBe(true);

        const edges = data.edges;

        if (edges.length > 0) {
          const favorites = edges[0].node;

          expect(favorites).toHaveProperty('position');
          expect(favorites).toHaveProperty('id');
          expect(favorites).toHaveProperty('createdAt');
          expect(favorites).toHaveProperty('updatedAt');
          expect(favorites).toHaveProperty('deletedAt');
          expect(favorites).toHaveProperty('workspaceMemberId');
          expect(favorites).toHaveProperty('personId');
          expect(favorites).toHaveProperty('companyId');
          expect(favorites).toHaveProperty('opportunityId');
          expect(favorites).toHaveProperty('taskId');
          expect(favorites).toHaveProperty('noteId');
          expect(favorites).toHaveProperty('viewId');
        }
      });
  });
});
