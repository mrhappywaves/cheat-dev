const router = require('express').Router();
const {Topic, Subject, User } = require('../models');

// router.get('/', (req, res) => {
//   res.render('homepage');
// });

// GET all topics for homepage
router.get('/', async (req, res) => {
  try {
    const topicData = await Topic.findAll();

    const topics  = topicData.map((topic) => topic.get({ plain: true }));
    res.render('homepage', {
      topics,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one topic
router.get('/topic/:id', async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      inclued: [
        {
          model: Subject,
          attributes: [
            'id',
            'title',
            'definition',
            'example'
          ],
        },
      ]
    });

    const topic = topicData.get({ plain: true });
    res.render('topic', { topic, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET one subject
router.get('/subject/:id', async (req, res) => {
  try {
    const subjectData = await Subject.findByPk(req.params.id);
    const subject = subjectData.get({ plain: true });
    res.render('subject', { subject, loggedIn: req.seesion.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
});

// Signup route
router.get('/signup', async (req, res) => {
  res.render('signup');
});

module.exports = router;