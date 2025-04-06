---
layout: ../../layouts/ArticleLayouts.astro
title: Student E-Voting System - LPUM
description: A System to facilitates student parties voting
image: /src/images/projects/03-lpum.png
imgCaption: E-Voting System for LPUM Poltek Nuklir
year: 2023
teamSize: 1
startPeriod: January 2023
endPeriod: March 2023
publishedAt: 2025-04-06 08:33
---

# Overview

This system aims to modernize the voting process for student organizations at Politeknik Teknologi Nulir Indonesia, providing reliable, efficient, and secure election platform.

## Background

The traditional paper-based voting system is considered inefficient in term of cost, human effort, and accountability. It often leads to following several problems :

- Disputed results
- Low transparency
- Minimal participation
- Lack of data security

These issues severely affects trust in election process and it stakeholder.

## Impact

- Reduced costs of election process by 80& : cutting down printing budget
- Boost student participation due to remote accessibility and time flexibility
- Increased accountability and transparency due to real-time result update.
- Minimized human errors and dispute potential.

## Tech Stack

- Laravel 9
- MySQL
- Bootstrap
- Livewire
- JQuery
- Cron Job
- Mail system

## Interesting part

There were several points which should be highlighted :

### Long polling system

Each election could be scoped to smallest possible student group. This ensure that only eligible voter can access their designated election. This will preventing unauthorized access or misvoting.

This process leverages a mail system and a long polling mechanism to send unique and secure link to each elector and managed through an admin dashboard.
