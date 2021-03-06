const router = require('express').Router();
const {Topic, Subject, User } = require('../models');
const withAuth = require('../utils/auth');

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
router.get('/topic/:id', withAuth, async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
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
    res.render('topic', { topic, loggedIn: true});
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET one subject
router.get('/subject/:id', withAuth, async (req, res) => {
  try {
    const subjectData = await Subject.findByPk(req.params.id);
    const subject = subjectData.get({ plain: true });
    res.render('subject', { subject, loggedIn: true});
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all topics subjects
router.get('/topics/:id', withAuth, async (req, res) => {
  try {
    const topicData = await Topic.findByPk(req.params.id, {
      include: [
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

    // All the topic data is sent to subjects handlebar
    const topic = topicData.get({ plain: true });
    res.render('subjects', { topic, loggedIn: true});
  } catch (err) {
    res.status(500).json(err)
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
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;