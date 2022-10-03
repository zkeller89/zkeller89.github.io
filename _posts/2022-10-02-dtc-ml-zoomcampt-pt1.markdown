---
layout: post
title:  "Course Report: DataTalksClub - ML Zoomcamp, pt 1"
subtitle: Weeks 1 through 4
date:   2022-10-02
categories: general biographical
---

### TL;DR

1. This is a wonderful, free course that benefits both the new learner and more senior analyst looking to refresh their ML chops.
2. It takes the code-along style, which I've found to be immensely helpful in implementing and better-understanding new concepts.
3. The course eventually touches on deployment and some cloud-computing, which is a topic severely under-taught in currently available analytics resources.
4. While there may be some small shortcomings for those looking for more advanced content, Alexey does not hide the fact there is much more going on behind the scenes than meets the eye.

# Intro
I figured I should start my blogging series about something I've done a fair amount of in the past: online learning. Online learning has provided me with knowledge equal to that of, if not greater than, the opportunities afforded to me through in-person learning. The class that this series of posts will be on is the [ML Zoomcamp][2] offered by [DataTalks.Club][2], which is headed by [Alexey Grigorev][3] and many other generous instructors.

# Course Overview
This is a **free** course offered as at self-paced or cohorted(i.e., weekly with fellow learners) speed. If you'd like to know when the next cohort opens up, sign up at data [DataTalk.Club][2] and they'll announce when sign-ups are available. In general, I look very favorably upon free courses (or anything of reasonable quality which is free...like open source software) - the amount of work and learning that results from these type of projects unlocks more learning potential than ever before in history, particularly for those who could benefit from it the most.

## Course Topics
Below is an abbreviated list of topics covered by the course - pulled from their [course github page for my cohort][4].

1. Introduction to Machine Learning
2. Machine Learning for Regression
3. Machine Learning for Classification
4. Evaluation Metrics for Classification
5. Deploying Machine Learning Models
6. Decision Trees and Ensemble Learning
7. Bento ML
8. Neural Networks and Deep Learning
9. Serverless Deep Learning
10. Kubernetes and TensorFlow Serving
11. KServe (optional)

Also included:
* Midterm Project
* Capstone Project

# Why I enrolled

After reading through the syllabus - it felt like this was something of a survey course, covering many topics. As someone who's been in data for a while with a statistics background, this was precisely what I was looking for, as I wanted something not too time-intensive which served to refresh my memory on some of the predictive analytics topics I hadn't touched in a while. I like to do this from time-to-time, as anyone who's been in data for long enough likely knows that working with more advanced analytics is often secondary to what I'll call 'business analytics' - boiling down what amounts to descriptive statistics in a thoughtful manner and combining it with deep knowledge of the business.

Moreover - what particularly caught my eye was the 'Deploying ML Models', 'Serverless Deep Learning', and 'Kubernetes and TensorFlow Serving' weeks. Something that I've always thought many ML courses fail to touch on is the 'deployment' and 'cloud-computing' aspect of ML (or even analytics in general). These are both two slightly different, albeit largely intertwined topics. A majority of analysts (myself included) are not given sufficient exposure to this part of the data universe, and I was/am excited to see what Alexey has in store for these sections. This was more fodder to enroll.

# Initial Impressions and Weeks 1 - 4

I've already got some experience in Alexy's courses, as I've taken much of the self-paced [Data Engeinering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp) course that he offers. The Data Engineering course offered a lot of hands-on coding with youtube code-along style videos, and the ML Zoomcamp is not much different in that respect. Many of the important topics and techniques of the course are initially coded by hand, using industry-standard python libraries, in order to demonstrate a simplified version of what's going on behind the scenes. This is as opposed to immediately providing a library which automatically performs the regression, classification, or training algorithm/technique being taught. Of course, he informs the learner of these libraries after all is said-and-done, but I think this approach is optimal for the learner who doesn't want a deep-dive right off the bat.

The topics are also covered in a way which isn't too intimidating to a beginner, but still unveils that there's much more to learn about any given topic than what's explicitly taught. For example, his partial derivation of the hat matrix for OLS Linear Regression tempts to learner to dive into linear algebra to learn much more about how these methods are actually brought together. This approach is a great method to cast a wide net and make the content accessible to those looking for a somewhat quick overview and deeper learning alike.

Given that his videos are code-along style, learning a scripting language is necessary (Python/Pandas in this case). I also like this, as being in analytics without the ability to employ a scripting language is like driving with 3 wheels on your car - it might work sometimes but it ain't going to cut it in the long term. While I'm partial to [R][5], I think python is easier to begin with and is certainly more pervasive in industry.

Lastly, after introducing the most common regression and classification methods (linear and logistic regression), covering their interpretation, and basic variable importance and model selection approaches, he immediately takes a turn towards modern evaluation metrics. I *really* like this approach. Intro classes I've taken in the past dedicated a disproportionate amount of time on nitty-gritty details which, while important, are often easier to digest after one is more familiar with the methods and their nuances. Model evaluation is paramount in industry, and understanding & communicating common techniques like ROC/AUC, cross-validation, and the difference between training, test, and validation sets are much more appropriate for this level of learning.

If I had any criticisms - it might be that there could be more discussion around assumptions that underlie linear regression, what happens when these assumptions are violated, and what options an analyst has if clear violations exist. Additionally, making available resources for deeper dives as well would be great to connect the more engaged learner with additional content (e.g, how logistic regression models are fit).

Overall - I'm very happy with this course so far and look forward to finishing it and moving on to the other courses offered by [Data Talks Club][2]. I think it's both a great option for the new learner and a more seasoned analyst looking to refresh their knowledge (and learn more python, in my case).

[1]: mlzoomcamp.com
[2]: https://datatalks.club/
[3]: https://alexeygrigorev.com/
[4]: https://github.com/alexeygrigorev/mlbookcamp-code/tree/master/course-zoomcamp/cohorts/2022
[5]: https://cran.r-project.org/